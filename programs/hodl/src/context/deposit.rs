use anchor_lang::prelude::*;
use anchor_spl::{
    associated_token::AssociatedToken,
    token_interface::{Mint, TokenAccount, TokenInterface},
};

use crate::state::Deposit;

#[derive(Accounts)]
pub struct Lock<'info> {
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
        space = Deposit::INIT_SPACE,
        seeds = [b"deposit",user.key().as_ref()],
        bump,
    )]
    pub deposit: Account<'info, Deposit>,
    pub associated_token_program: Program<'info, AssociatedToken>,
    pub system_program: Program<'info, System>,
    pub token_program: Interface<'info, TokenInterface>,
}

impl<'info> Lock<'info> {}
