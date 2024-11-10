use anchor_lang::prelude::*;
use anchor_spl::{
    associated_token::AssociatedToken,
    token_interface::{transfer_checked, Mint, TokenAccount, TokenInterface, TransferChecked},
};

use crate::state::Lock;

#[derive(Accounts)]
pub struct LockFunds<'info> {
    #[account(mut)]
    pub user: Signer<'info>,
    pub user_mint: InterfaceAccount<'info, Mint>,
    #[account(
        mut,
        associated_token::mint = user_mint,
        associated_token::authority = user
    )]
    pub user_ata: InterfaceAccount<'info, TokenAccount>,
    #[account(
        init_if_needed,
        payer = user,
        associated_token::mint = user_mint,
        associated_token::authority = deposit
    )]
    pub vault: InterfaceAccount<'info, TokenAccount>,
    #[account(
        init,
        payer = user,
        space = Lock::INIT_SPACE,
        seeds = [b"deposit",user.key().as_ref()],
        bump,
    )]
    pub deposit: Account<'info, Lock>,
    pub associated_token_program: Program<'info, AssociatedToken>,
    pub system_program: Program<'info, System>,
    pub token_program: Interface<'info, TokenInterface>,
}

impl<'info> LockFunds<'info> {
    pub fn lock_funds(
        &mut self,
        amount: u64,
        unlock_at: i64,
        bumps: &LockFundsBumps,
    ) -> Result<()> {
        self.deposit.set_inner(Lock {
            amount,
            bump: bumps.deposit,
            user: self.user.key(),
            unlocked_at: unlock_at,
        });
        Ok(())
    }
    pub fn transfer(&mut self, _amount: u64) -> Result<()> {
        let cpi_program = self.token_program.to_account_info();
    
        let cpi_accounts = TransferChecked {
            from: self.user_ata.to_account_info(),
            mint: self.user_mint.to_account_info(),
            to: self.vault.to_account_info(),
            authority: self.user.to_account_info(),
        };
        let cpi_ctx = CpiContext::new(cpi_program, cpi_accounts);

        transfer_checked(cpi_ctx, 1, self.user_mint.decimals)
    }
}
