pub mod context;
pub mod error;
pub mod state;

use anchor_lang::prelude::*;
pub use context::*;
pub use error::*;

declare_id!("CXr7jA4Lm3fDUGSRNfGWf3P1KNmHvEBZ5dwYoBcLjeXY");

#[program]
pub mod hodl {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>, locked_duration: i64) -> Result<()> {
        ctx.accounts.init(&ctx.bumps, locked_duration)
    }

    pub fn deposit(ctx: Context<LockFunds>, amount: u64, unlock_at: i64) -> Result<()> {
        ctx.accounts.lock_funds(amount, unlock_at, &ctx.bumps);
        ctx.accounts.transfer(amount)
    }
}
