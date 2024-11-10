use anchor_lang::prelude::*;

#[error_code]
pub enum PlatformError {
    #[msg("The lock-up period has not yet been reached.")]
    LockupPeriodNotReached,
}
