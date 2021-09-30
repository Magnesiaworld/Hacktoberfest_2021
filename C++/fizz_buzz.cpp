#include <iostream>

using namespace std;

int main() {

  for (int i = 1; i <= 50; i++) {

    string output = "";

    if (i % 3 == 0) output += "Fizz";
    if (i % 5 == 0) output += "Buzz";

    if (output == "") output = to_string(i);

    cout << output << endl;

  }
  
}
