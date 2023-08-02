### Optimizing rendering performance in React: : Utilizing memo & useCallback 🚀


🎯 The Challenge:

Rendering large lists of items can lead to performance bottlenecks, causing sluggish user experiences and excessive resource consumption.

> #### *See the code in branch:* problem
https://github.com/Vogric/optimizing-rendering-performance-in-react/assets/53317134/c4383f41-175d-41f3-9633-53fd2ab4aeae

😎 The Solution:

1️⃣ Leverage memo: Wrap functional components with memo to avoid unnecessary re-renders. Components will only update when their props change, saving valuable processing time.

![image](https://github.com/Vogric/optimizing-rendering-performance-in-react/assets/53317134/e4fadf4e-9620-4895-b8bb-199fbe281866)


2️⃣ Harness useCallback: Employ useCallback to memoize functions, preventing them from being recreated during each render. This optimizes the rendering process and enhances overall performance.

![image](https://github.com/Vogric/optimizing-rendering-performance-in-react/assets/53317134/ef45b7c7-5b56-4d4b-99ad-041283a8bfef)


🔍 React Profiler:

Employ the React Profiler, accessible through your browser's React DevTools, to:

1️⃣ Identify redundant renders.
2️⃣ Analyze render durations for potential optimization opportunities.

https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi

> #### *See the code in branch:* solution
https://github.com/Vogric/optimizing-rendering-performance-in-react/assets/53317134/954a80bf-fdc2-4838-82d1-86a64cbb6954

