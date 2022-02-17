interface Node {
  left?: Node;
  right?: Node;
  value: number;
}

export function findLargestSmallerKey(
  rootNode: Node | undefined,
  num: number
): number | null {
  if (!rootNode) {
    return null;
  }

  const isUnderNum = rootNode.value < num;
  if (isUnderNum) {
    const largestInRightSubtree = findLargestSmallerKey(rootNode.right, num);
    if (!largestInRightSubtree) {
      return rootNode.value;
    } else {
      return largestInRightSubtree;
    }
  } else {
    const largestInLeftSubtree = findLargestSmallerKey(rootNode.left, num);
    if (!largestInLeftSubtree) {
      return rootNode.value;
    } else {
      return largestInLeftSubtree;
    }
  }
}

const rootNode: Node = {
  value: 20,
  left: {
    value: 9,
    left: {
      value: 5,
    },
    right: {
      value: 12,
      left: {
        value: 11,
      },
      right: {
        value: 14,
      },
    },
  },
  right: {
    value: 25,
  },
};

console.log(findLargestSmallerKey(rootNode, 17));
