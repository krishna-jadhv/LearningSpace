import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;

public class SimpleServer {
    public static void main(String[] args) throws IOException {
        int port = 8000;

        // Create an HTTP server listening on port 8000
        HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);

        // Define the endpoint "/" and its response handler
        server.createContext("/", new HttpHandler() {
            @Override
            public void handle(HttpExchange exchange) throws IOException {
                // The message displayed in the web browser
                String response = "<h1>Server is running!</h1><p>Message from Java on port 8000.</p>";

                // Set response header: HTTP status 200 (OK) and content length
                exchange.getResponseHeaders().set("Content-Type", "text/html; charset=UTF-8");
                exchange.sendResponseHeaders(200, response.getBytes().length);

                // Write the response body
                OutputStream os = exchange.getResponseBody();
                os.write(response.getBytes());
                os.close();
            }
        });

        // Start the server
        server.start();
        System.out.println("🚀 Server started successfully!");
        System.out.println("Access it in your browser at: http://localhost:" + port);
    }
}
