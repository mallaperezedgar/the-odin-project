// ─── Node factory ─────────────────────────────────────────────────────────────

function Node(data) {
  return { data, left: null, right: null };
}

// ─── Tree factory ─────────────────────────────────────────────────────────────

function Tree(array) {
  function buildTree(arr) {
    const sorted = [...new Set(arr)].sort((a, b) => a - b);
    return buildBalanced(sorted, 0, sorted.length - 1);
  }

  function buildBalanced(arr, start, end) {
    if (start > end) return null;
    const mid = Math.floor((start + end) / 2);
    const node = Node(arr[mid]);
    node.left  = buildBalanced(arr, start, mid - 1);
    node.right = buildBalanced(arr, mid + 1, end);
    return node;
  }

  let root = buildTree(array);

  return {
    get root() { return root; },

    // ── includes ──────────────────────────────────────────────────────────────
    includes(value) {
      let cur = root;
      while (cur) {
        if (value === cur.data) return true;
        cur = value < cur.data ? cur.left : cur.right;
      }
      return false;
    },

    // ── insert ────────────────────────────────────────────────────────────────
    insert(value) {
      if (!root) { root = Node(value); return; }
      let cur = root;
      while (true) {
        if (value === cur.data) return;
        if (value < cur.data) {
          if (!cur.left)  { cur.left  = Node(value); return; }
          cur = cur.left;
        } else {
          if (!cur.right) { cur.right = Node(value); return; }
          cur = cur.right;
        }
      }
    },

    // ── deleteItem ────────────────────────────────────────────────────────────
    deleteItem(value) {
      root = deleteNode(root, value);
    },

    // ── levelOrderForEach ─────────────────────────────────────────────────────
    levelOrderForEach(cb) {
      if (typeof cb !== 'function') throw new Error('Se requiere una función callback');
      if (!root) return;
      const queue = [root];
      while (queue.length) {
        const node = queue.shift();
        cb(node.data);
        if (node.left)  queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    },

    // ── depth-first traversals ────────────────────────────────────────────────
    inOrderForEach(cb) {
      if (typeof cb !== 'function') throw new Error('Se requiere una función callback');
      function traverse(node) {
        if (!node) return;
        traverse(node.left);
        cb(node.data);
        traverse(node.right);
      }
      traverse(root);
    },

    preOrderForEach(cb) {
      if (typeof cb !== 'function') throw new Error('Se requiere una función callback');
      function traverse(node) {
        if (!node) return;
        cb(node.data);
        traverse(node.left);
        traverse(node.right);
      }
      traverse(root);
    },

    postOrderForEach(cb) {
      if (typeof cb !== 'function') throw new Error('Se requiere una función callback');
      function traverse(node) {
        if (!node) return;
        traverse(node.left);
        traverse(node.right);
        cb(node.data);
      }
      traverse(root);
    },

    // ── height ────────────────────────────────────────────────────────────────
    height(value) {
      const node = findNode(root, value);
      if (!node) return undefined;
      return nodeHeight(node);
    },

    // ── depth ─────────────────────────────────────────────────────────────────
    depth(value) {
      let cur = root, edges = 0;
      while (cur) {
        if (value === cur.data) return edges;
        cur = value < cur.data ? cur.left : cur.right;
        edges++;
      }
      return undefined;
    },

    // ── isBalanced ────────────────────────────────────────────────────────────
    isBalanced() {
      function check(node) {
        if (!node) return 0;
        const l = check(node.left);
        if (l === -1) return -1;
        const r = check(node.right);
        if (r === -1) return -1;
        if (Math.abs(l - r) > 1) return -1;
        return Math.max(l, r) + 1;
      }
      return check(root) !== -1;
    },

    // ── rebalance ─────────────────────────────────────────────────────────────
    rebalance() {
      const values = [];
      function inorder(node) {
        if (!node) return;
        inorder(node.left);
        values.push(node.data);
        inorder(node.right);
      }
      inorder(root);
      root = buildTree(values);
    },
  };
}

// ─── Helpers (fuera del factory) ──────────────────────────────────────────────

function findNode(root, value) {
  let cur = root;
  while (cur) {
    if (value === cur.data) return cur;
    cur = value < cur.data ? cur.left : cur.right;
  }
  return null;
}

function nodeHeight(node) {
  if (!node) return -1;
  return 1 + Math.max(nodeHeight(node.left), nodeHeight(node.right));
}

function deleteNode(node, value) {
  if (!node) return null;
  if (value < node.data) {
    node.left = deleteNode(node.left, value);
  } else if (value > node.data) {
    node.right = deleteNode(node.right, value);
  } else {
    // sin hijos o un hijo
    if (!node.left) return node.right;
    if (!node.right) return node.left;
    // dos hijos: sucesor in-order (mínimo del subárbol derecho)
    let successor = node.right;
    while (successor.left) successor = successor.left;
    node.data = successor.data;
    node.right = deleteNode(node.right, successor.data);
  }
  return node;
}

// ─── prettyPrint ──────────────────────────────────────────────────────────────

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (!node) return;
  prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  prettyPrint(node.left,  `${prefix}${isLeft ? '    ' : '│   '}`, true);
};

// ─── Driver script ────────────────────────────────────────────────────────────

function randomArray(size = 15, max = 99) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * max) + 1);
}

const collect = (fn) => { const arr = []; fn(v => arr.push(v)); return arr; };

// 1. Crear árbol con números < 100
const tree = Tree(randomArray());
console.log('\n=== Árbol inicial ===');
prettyPrint(tree.root);

// 2. Confirmar que está balanceado
console.log('\nisBalanced:', tree.isBalanced()); // true

// 3. Imprimir recorridos
console.log('levelOrder:  ', collect(cb => tree.levelOrderForEach(cb)));
console.log('preOrder:    ', collect(cb => tree.preOrderForEach(cb)));
console.log('postOrder:   ', collect(cb => tree.postOrderForEach(cb)));
console.log('inOrder:     ', collect(cb => tree.inOrderForEach(cb)));

// 4. Desequilibrar añadiendo valores > 100
[105, 120, 135, 150, 165, 180].forEach(v => tree.insert(v));
console.log('\n=== Árbol desequilibrado ===');
prettyPrint(tree.root);

// 5. Confirmar que NO está balanceado
console.log('\nisBalanced:', tree.isBalanced()); // false

// 6. Rebalancear
tree.rebalance();
console.log('\n=== Árbol rebalanceado ===');
prettyPrint(tree.root);

// 7. Confirmar que está balanceado de nuevo
console.log('\nisBalanced:', tree.isBalanced()); // true

// 8. Imprimir recorridos del árbol balanceado
console.log('levelOrder:  ', collect(cb => tree.levelOrderForEach(cb)));
console.log('preOrder:    ', collect(cb => tree.preOrderForEach(cb)));
console.log('postOrder:   ', collect(cb => tree.postOrderForEach(cb)));
console.log('inOrder:     ', collect(cb => tree.inOrderForEach(cb)));

// Pruebas extra
console.log('\n--- Pruebas extra ---');
const val = tree.root.data;
console.log(`includes(${val}):`, tree.includes(val));     // true
console.log(`height(${val}):`,   tree.height(val));
console.log(`depth(${val}):`,    tree.depth(val));        // 0 (es la raíz)
tree.insert(999);
console.log('insert(999), includes(999):', tree.includes(999)); // true
tree.deleteItem(999);
console.log('deleteItem(999), includes(999):', tree.includes(999)); // false