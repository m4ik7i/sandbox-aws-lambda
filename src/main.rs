use lambda_runtime::{error::HandlerError, lambda, Context};
use serde::{Deserialize, Serialize};

type UnitResult = Result<(), Box<dyn std::error::Error>>;

fn main() -> UnitResult {
    lambda!(handler);

    Ok(())
}

#[derive(Deserialize)]
struct CustomEvent {
    #[serde(rename = "firstName")]
    first_name: String,
}

#[derive(Serialize)]
struct CustomOutput {
    message: String,
}

fn handler(e: CustomEvent, _c: Context) -> Result<CustomOutput, HandlerError> {
    Ok(CustomOutput {
        message: format!("Hello, {}!", e.first_name),
    })
}
