Topic Description
When the Olympic Games come, everyone is very concerned about the medal table. Now let's assume the medal table ranking rules are as follows:

1. The gold medals with a large number of gold medals are ranked first.
2. The silver medals with a large quantity are ranked first.
3. Then, the ones with more bronze medals are ranked in the front.
4. If the above three conditions still cannot distinguish the rankings, the rankings shall be based on the dictionary order of the country name.
   We assume that the country name does not exceed 20 characters, the number of medals does not exceed 100, and the number of medals is greater than or equal to 0.

Time limit: 1000 ms; memory limit: 100 MB

input
Enter an integer N (0 < N < 21) in the first row, indicating the country quantity.
Then the next N rows, each containing a string Namei for the name of each country, and three integers Gi, Si, Bi for the number of gold medals, silver medals, and bronze medals, separated by spaces, e.g. (China 51 20 21). For details, see the sample input.

Output
Output the medal rankings in order. Only the country names are output. Each row occupies one row. For details, see the example output.

Example

Input Example 1
5
China 32 28 34
England 12 34 22
France 23 33 2
Japan 12 34 25
Russia 23 43 0

Output Example 1
China
Russia
France
Japan
England
