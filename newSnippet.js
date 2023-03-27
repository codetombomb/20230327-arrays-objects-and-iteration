const nums = [1,2,3]
nums.otherKey = "value"
Object.defineProperty(nums, "four", {value: 4, enumerable: false})
Object.defineProperty(nums, "five", {value: 5, enumerable: true})


for (const num in nums) {
    console.log(num)
}




