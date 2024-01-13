public class LabProgram {
    public static void main(String[] args) {
      Scanner scnr = new Scanner(System.in);  
     
      int x;
      int y;
      int z;

        x = scnr.nextInt();
        y = scnr.nextInt();
        z = scnr.nextInt();


        if ((x < y) && (x < z)) {
            System.out.println(x);
        }
        else if ((y < x) && (y < z)) {
            System.out.println(y);
        }
        else {
            System.out.println(z);
        }
    }
}

