namespace Sandbox.AWS.Lambda

open System

open Amazon.Lambda.Core

[<assembly: LambdaSerializer(typeof<Amazon.Lambda.Serialization.Json.JsonSerializer>)>]
do ()

type CustomEvent () =
    [<DefaultValue>]
    val mutable message: string

type CustomOutput () =
    [<DefaultValue>]
    val mutable message: string

type Program () =
    member __.Handler (event: CustomEvent) (context: ILambdaContext) =
        let output = new CustomOutput ()
        output.message <- event.message
        output
