import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        // Create a Scanner object to read input from the keyboard
        Scanner input = new Scanner(System.in);

        // Ask the user for two numbers
        System.out.print("Enter first number: ");
        double num1 = input.nextDouble();

        System.out.print("Enter second number: ");
        double num2 = input.nextDouble();

        // Perform basic operations
        double sum = num1 + num2;
        double product = num1 * num2;

        // Display the results
        System.out.println("\n--- Results ---");
        System.out.println("Sum        : " + sum);
        System.out.println("Product    : " + product);

        input.close();
    }
}
