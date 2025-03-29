// 2215. Find the difference of two arrays 

function findDifference(nums1: number[], nums2: number[]): number[][] {
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)
    console.log(set1, set2)

    nums1 = [... new Set(nums1)]
    nums2 = [... new Set(nums2)]
    // console.log(nums1, nums2)

    let arr1 = []
    let arr2 = []

    console.log(nums2[1] === 0)

    for (let i = 0; i < Math.max(nums1.length, nums2.length); i++) {
        console.log(nums1[i], nums2[i])
        if (nums1[i] !== undefined && !set2.has(nums1[i])) arr1.push(nums1[i])
        if (nums2[i] !== undefined && !set1.has(nums2[i])) arr2.push(nums2[i])
    }

    return [arr1, arr2]
};

// let nums1 = [80,5,-20,33,26,29], nums2 = [-69,0,-36,52,-84,-34,-67,-100,80]

// console.log(findDifference(nums1, nums2))

// [[5, -20, 33, 26, 29]]