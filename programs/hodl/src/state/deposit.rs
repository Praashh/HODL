use anchor_lang::prelude::*;

#[account]
pub struct Deposit {
    pub amount: u64,
    pub bump: u8,
    pub user: Pubkey,
}

impl Space for Deposit {
    const INIT_SPACE: usize = 8 + 2 * 32 + 8;
}
