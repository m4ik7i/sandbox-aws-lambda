use lambda_runtime::{error::HandlerError, lambda, Context};
use serde::{Deserialize, Serialize};

type UnitResult = Result<(), Box<dyn std::error::Error>>;

fn main() -> UnitResult {
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
