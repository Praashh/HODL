use crate::state::hodl::Hodl;
use anchor_lang::prelude::*;
use anchor_spl::{
    associated_token::AssociatedToken,
    token_interface::{Mint, TokenAccount, TokenInterface},
};

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(mut)]
    pub user: Signer<'info>,
    #[account(
       init,
       payer = user,
       seeds = [b"hodl",user.key().as_ref()],
       bump,
       space = Hodl::INIT_SPACE
    )]
    pub hodl: Account<'info, Hodl>,
    pub user_mint: InterfaceAccount<'info, Mint>,
    #[account(
        init,
        payer = user,
        associated_token::mint = user_mint,
        associated_token::authority = hodl
    )]
    vault: InterfaceAccount<'info, TokenAccount>,
    pub associated_token_program: Program<'info, AssociatedToken>,
    pub system_program: Program<'info, System>,
    pub token_program: Interface<'info, TokenInterface>,
}

impl<'info> Initialize<'info> {
    pub fn init(&mut self, bumps: &InitializeBumps, locked_duration: i64) -> Result<()> {
        let clock = Clock::get()?;
        let current_timestamp = clock.unix_timestamp;

        let unlocked_at = current_timestamp + locked_duration;

        self.hodl.set_inner(Hodl {
            owner: self.user.key(),
            amount: 0,
            unlocked_at,
            is_withdrawn: false,
            bump: bumps.hodl,
        });
        Ok(())
    }
}
