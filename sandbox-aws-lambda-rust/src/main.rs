use lambda_runtime::{error::HandlerError, lambda, Context};
use serde::{Deserialize, Serialize};

type Error = Box<dyn std::error::Error + Send + Sync>;
type Result<T, E = Error> = std::result::Result<T, E>;

fn main() -> Result<()> {
    lambda!(handler);

    Ok(())
}

#[derive(Deserialize)]
struct CustomEvent {
    message: String,
}

#[derive(Serialize)]
struct CustomOutput {
    message: String,
}

fn handler(e: CustomEvent, _c: Context) -> Result<CustomOutput, HandlerError> {
    Ok(CustomOutput { message: e.message })
}
