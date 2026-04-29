// HashMap factory
function HashMap() {
  const LOAD_FACTOR = 0.75;
  let capacity = 16;
  let buckets = new Array(capacity).fill(null).map(() => []);
  let count = 0;

  function hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
    }
    return hashCode;
  }

  function resize() {
    capacity *= 2;
    const newBuckets = new Array(capacity).fill(null).map(() => []);
    for (const bucket of buckets) {
      for (const [k, v] of bucket) {
        const index = hash(k);
        newBuckets[index].push([k, v]);
      }
    }
    buckets = newBuckets;
  }

  return {
    set(key, value) {
      const index = hash(key);
      const bucket = buckets[index];
      const existing = bucket.find(([k]) => k === key);
      if (existing) {
        existing[1] = value;
        return;
      }
      bucket.push([key, value]);
      count++;
      if (count / capacity >= LOAD_FACTOR) resize();
    },

    get(key) {
      const bucket = buckets[hash(key)];
      const entry = bucket.find(([k]) => k === key);
      return entry ? entry[1] : null;
    },

    has(key) {
      const bucket = buckets[hash(key)];
      return bucket.some(([k]) => k === key);
    },

    remove(key) {
      const index = hash(key);
      const bucket = buckets[index];
      const i = bucket.findIndex(([k]) => k === key);
      if (i === -1) return false;
      bucket.splice(i, 1);
      count--;
      return true;
    },

    length() { return count; },

    clear() {
      buckets = new Array(capacity).fill(null).map(() => []);
      count = 0;
    },

    keys()    { return buckets.flat().map(([k]) => k); },
    values()  { return buckets.flat().map(([, v]) => v); },
    entries() { return buckets.flat().map(([k, v]) => [k, v]); },
  };
}

// ── Test ──────────────────────────────────────────────────────────────────────

const test = HashMap();

test.set('apple',     'red');
test.set('banana',    'yellow');
test.set('carrot',    'orange');
test.set('dog',       'brown');
test.set('elephant',  'gray');
test.set('frog',      'green');
test.set('grape',     'purple');
test.set('hat',       'black');
test.set('ice cream', 'white');
test.set('jacket',    'blue');
test.set('kite',      'pink');
test.set('lion',      'golden');

console.log('--- Load factor reached (12/16 = 0.75) ---');
console.log('length:', test.length());        // 12

// Sobrescribir nodos existentes — length no debe cambiar
test.set('apple', 'green');
test.set('banana', 'brown');
console.log('\n--- After overwriting apple & banana ---');
console.log('length:', test.length());        // 12 (sin cambios)
console.log('apple →', test.get('apple'));    // green
console.log('banana →', test.get('banana')); // brown

// Trigger resize
test.set('moon', 'silver');
console.log('\n--- After adding moon (resize triggered) ---');
console.log('length:', test.length());        // 13

console.log('\n--- Other methods ---');
console.log('has("dog"):', test.has('dog'));           // true
console.log('has("xyz"):', test.has('xyz'));           // false
console.log('get("frog"):', test.get('frog'));         // green
console.log('remove("hat"):', test.remove('hat'));     // true
console.log('remove("hat"):', test.remove('hat'));     // false
console.log('length after remove:', test.length());   // 12

console.log('\nkeys():',    test.keys());
console.log('values():',  test.values());
console.log('entries():', test.entries());

test.clear();
console.log('\nlength after clear:', test.length());   // 0


// ── HashSet ───────────────────────────────────────────────────────────────────

function HashSet() {
  const map = HashMap();
  return {
    add(key)        { map.set(key, true); },
    has(key)        { return map.has(key); },
    remove(key)     { return map.remove(key); },
    length()        { return map.length(); },
    clear()         { map.clear(); },
    keys()          { return map.keys(); },
  };
}

console.log('\n--- HashSet ---');
const set = HashSet();
set.add('a');
set.add('b');
set.add('a'); // duplicado, no añade
console.log('length:', set.length()); // 2
console.log('has a:', set.has('a'));  // true
console.log('keys:', set.keys());     // ['a', 'b']