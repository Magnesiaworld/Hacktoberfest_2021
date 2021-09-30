#include <iostream>

using namespace std;

int main() {

  // Begin our main loop of 1-50
  for (int i = 1; i <= 50; i++) {

    string output = ""; 

    if (i % 3 == 0) output += "Fizz"; // If our current number is a multiple of 3, add "Fizz to the output"
    if (i % 5 == 0) output += "Buzz"; // If our current number is a multiple of 5, add "Buzz to the output"

    if (output == "") output = to_string(i); // If the output is empty (our number isn't a multiple of 3 or 5), we simply set it to our number

    cout << output << endl; // Show the user the output

  }
  
}
