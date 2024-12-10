/**
 * Code for leetcode 88. Merge Sorted Array
*/

#include <iostream>
#include <vector>
#include <string>

using namespace std;

void printVector(vector<int> v)
{
    cout << "{ ";
    for (const int& x : v)
    {
        cout << x << ", ";
    }
    cout << "}" << endl;

}

void merge(vector<int>& nums1, int m, vector<int>& nums2, int n)
{
    if (m == 0)
    {
        for(int k = 0; k < n; k ++)
        {
            nums1[k+m] = nums2[k];
        }
        printVector(nums1);
        return;
    }

    for(int i = 0; i < m; i++)
    {
        for(int k = 0; k < n; k ++)
        {
            nums1[k+m] = nums2[k];
        }
    }

    printVector(nums1);

    for(int i = 0; i < nums1.size(); i++)
    {
        int low = nums1[i];
        int index = i;

        for(int k = i+1; k < nums1.size(); k ++)
        {
            if (nums1[k] < low)
            {
                low = nums1[k];
                index = k;
            }
        }

        //if (index != i)
        {
            int aux = nums1[i];
            nums1[i] = nums1[index];
            nums1[index] = aux;
        }
    }

    printVector(nums1);
      
}

int main()
{
    /*vector<int> vector1 = {1,2,3,0,0,0};
    vector<int> vector2 = {2,5,6};
    int m = 3;
    int n = 3;*/

    /*vector<int> vector1 = {1,2,3,0,0,0};
    vector<int> vector2 = {2,5,6};
    int m = 3;
    int n = 3;*/

    vector<int> vector1 = {0};
    vector<int> vector2 = {1};
    int m = 0;
    int n = 1;

    /*vector<int> vector1 = {0,0,0,0,0};
    vector<int> vector2 = {1,2,3,4,5};
    int m = 0;
    int n = 5;*/

    merge(vector1, m, vector2, n);
    
}