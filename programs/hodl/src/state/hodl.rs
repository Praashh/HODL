use anchor_lang::prelude::*;

#[account]
pub struct Hodl {
    pub owner: Pubkey,
    pub amount: u64,
    pub unlocked_at: i64,
    pub is_withdrawn: bool,
    pub bump: u8,
}

impl Space for Hodl {
    const INIT_SPACE: usize = 8 + 2 * 32 + 8 * 2 + 1 * 2;
}
