package main

import (
	"context"
	"github.com/aws/aws-lambda-go/lambda"
)

type Context = context.Context

type CustomEvent struct {
	Message string ""
}

type CustomOutput struct {
	Message string ""
}

func HandleRequest(context Context, event CustomEvent) (CustomOutput, error) {
	output := CustomOutput{Message: event.Message}
	return output, nil
}

func main() {
	lambda.Start(HandleRequest)
}
