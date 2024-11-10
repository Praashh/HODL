use anchor_lang::prelude::*;

#[account]
pub struct Lock {
    pub amount: u64,
    pub bump: u8,
    pub user: Pubkey,
    pub unlocked_at: i64,
}

impl Space for Lock {
    const INIT_SPACE: usize = 8 + 2 * 32 + 1 + 8;
}
