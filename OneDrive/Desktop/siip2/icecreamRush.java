public class icecreamRush {

    static class Flavor {
        String name;
        int sales;

        Flavor(String name, int sales) {
            this.name = name;
            this.sales = sales;
        }
    }

    // Bubble sort to sort flavors by sales in descending order
    public static void bubbleSort(Flavor[] flavors) {
        int n = flavors.length;
        boolean swapped;
        for (int i = 0; i < n - 1; i++) {
            swapped = false;
            for (int j = 0; j < n - 1 - i; j++) {
                if (flavors[j].sales < flavors[j + 1].sales) {
                    // Swap adjacent flavors
                    Flavor temp = flavors[j];
                    flavors[j] = flavors[j + 1];
                    flavors[j + 1] = temp;
                    swapped = true;
                }
            }
            // If no swaps occurred, array is sorted
            if (!swapped) break;
        }
    }

    public static void main(String[] args) {
        java.util.Scanner scanner = new java.util.Scanner(System.in);

        Flavor[] flavors = {
            new Flavor("Vanilla", 0),
            new Flavor("Chocolate", 0),
            new Flavor("Strawberry", 0),
            new Flavor("Mint", 0),
            new Flavor("Cookie Dough", 0)
        };

        System.out.println("Please enter sales for each flavor:");

        for (Flavor f : flavors) {
            System.out.print(f.name + ": ");
            f.sales = scanner.nextInt();
        }

        System.out.println("\nBefore sorting:");
        for (Flavor f : flavors) {
            System.out.println(f.name + ": " + f.sales);
        }

        bubbleSort(flavors);

        System.out.println("\nAfter sorting by popularity (sales):");
        for (Flavor f : flavors) {
            System.out.println(f.name + ": " + f.sales);
        }

        scanner.close();
    }
}
