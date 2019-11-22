using Amazon.Lambda.Core;

[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.Json.JsonSerializer))]

namespace Sandbox.AWS.Lambda
{
    public class Program
    {
        public CustomOutput Handler(CustomEvent e, ILambdaContext context)
        {
            CustomOutput output = new CustomOutput();
            output.message = e.message;

            return output;
        }

        public class CustomEvent
        {
            public string message;
        }

        public class CustomOutput
        {
            public string message;
        }
    }    
}
