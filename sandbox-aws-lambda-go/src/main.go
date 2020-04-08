package main

import (
	"context"

	"github.com/aws/aws-lambda-go/lambda"
)

// Context is
type Context = context.Context

// CustomEvent is
type CustomEvent struct {
	Message string ""
}

// CustomOutput is
type CustomOutput struct {
	Message string ""
}

// HandleRequest is
func HandleRequest(context Context, event CustomEvent) (CustomOutput, error) {
	output := CustomOutput{Message: event.Message}
	return output, nil
}

func main() {
	lambda.Start(HandleRequest)
}
