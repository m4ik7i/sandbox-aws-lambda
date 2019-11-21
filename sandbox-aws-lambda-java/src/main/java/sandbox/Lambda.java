package sandbox;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;

import sandbox.Lambda.CustomEvent;
import sandbox.Lambda.CustomOutput;

public class Lambda implements RequestHandler<CustomEvent, CustomOutput> {

    @Override
    public CustomOutput handleRequest(CustomEvent event, Context context) {
        CustomOutput output = new CustomOutput();
        output.message = event.message;
        
        return output;
    }

    public static class CustomEvent {
        public String message;
    }

    public static class CustomOutput {
        public String message;
    }

}
