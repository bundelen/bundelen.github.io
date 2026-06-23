---
title: API Reference
description: Every method available on Python Collect's Collection class.
---

All methods below are available on every `Collection` instance (created via `collect(...)` or `Collection(...)`) unless marked **(static)**, in which case call them on the `Collection` class itself, e.g. `Collection.make(...)`.

Unless noted as **Mutating**, methods return a **new** `Collection` and leave the original untouched.

## Contents

- [`all()`](#all)
- [`average()`](#average)
- [`avg()`](#avg)
- [`chunk()`](#chunk)
- [`collapse()`](#collapse)
- [`collect()`](#collect)
- [`Collection()`](#collection)
- [`combine()`](#combine)
- [`concat()`](#concat)
- [`contains()`](#contains)
- [`contains_one_item()`](#contains_one_item)
- [`count()`](#count)
- [`count_by()`](#count_by)
- [`cross_join()`](#cross_join)
- [`dd()`](#dd)
- [`diff()`](#diff)
- [`diff_assoc()`](#diff_assoc)
- [`diff_keys()`](#diff_keys)
- [`diff_using()`](#diff_using)
- [`doesnt_contain()`](#doesnt_contain)
- [`dump()`](#dump)
- [`duplicates()`](#duplicates)
- [`each()`](#each)
- [`each_spread()`](#each_spread)
- [`every()`](#every)
- [`except_()`](#except_)
- [`filter()`](#filter)
- [`first()`](#first)
- [`first_or_fail()`](#first_or_fail)
- [`first_where()`](#first_where)
- [`flat_map()`](#flat_map)
- [`flatten()`](#flatten)
- [`flip()`](#flip)
- [`forget()`](#forget)
- [`for_page()`](#for_page)
- [`get()`](#get)
- [`group_by()`](#group_by)
- [`has()`](#has)
- [`implode()`](#implode)
- [`intersect()`](#intersect)
- [`intersect_by_keys()`](#intersect_by_keys)
- [`is_empty()`](#is_empty)
- [`is_not_empty()`](#is_not_empty)
- [`join()`](#join)
- [`key_by()`](#key_by)
- [`keys()`](#keys)
- [`last()`](#last)
- [`Collection.macro()` (static)](#collectionmacro-static)
- [`Collection.make()` (static)](#collectionmake-static)
- [`map()`](#map)
- [`map_into()`](#map_into)
- [`map_spread()`](#map_spread)
- [`map_to_dictionary()`](#map_to_dictionary)
- [`map_to_groups()`](#map_to_groups)
- [`map_with_keys()`](#map_with_keys)
- [`max()`](#max)
- [`median()`](#median)
- [`merge()`](#merge)
- [`merge_recursive()`](#merge_recursive)
- [`min()`](#min)
- [`mode()`](#mode)
- [`nth()`](#nth)
- [`only()`](#only)
- [`pad()`](#pad)
- [`partition()`](#partition)
- [`pipe()`](#pipe)
- [`pluck()`](#pluck)
- [`pop()`](#pop)
- [`prepend()`](#prepend)
- [`pull()`](#pull)
- [`push()`](#push)
- [`put()`](#put)
- [`random()`](#random)
- [`reduce()`](#reduce)
- [`reject()`](#reject)
- [`replace()`](#replace)
- [`replace_recursive()`](#replace_recursive)
- [`reverse()`](#reverse)
- [`search()`](#search)
- [`shift()`](#shift)
- [`shuffle()`](#shuffle)
- [`skip()`](#skip)
- [`skip_until()`](#skip_until)
- [`skip_while()`](#skip_while)
- [`slice()`](#slice)
- [`sole()`](#sole)
- [`some()`](#some)
- [`sort()`](#sort)
- [`sort_by()`](#sort_by)
- [`sort_by_desc()`](#sort_by_desc)
- [`sort_desc()`](#sort_desc)
- [`sort_keys()`](#sort_keys)
- [`sort_keys_desc()`](#sort_keys_desc)
- [`splice()`](#splice)
- [`split()`](#split)
- [`sum()`](#sum)
- [`take()`](#take)
- [`take_until()`](#take_until)
- [`take_while()`](#take_while)
- [`tap()`](#tap)
- [`Collection.times()` (static)](#collectiontimes-static)
- [`to_array()`](#to_array)
- [`to_json()`](#to_json)
- [`to_list()`](#to_list)
- [`transform()`](#transform)
- [`undot()`](#undot)
- [`union()`](#union)
- [`unique()`](#unique)
- [`unless()`](#unless)
- [`unless_empty()`](#unless_empty)
- [`unless_not_empty()`](#unless_not_empty)
- [`Collection.unwrap()` (static)](#collectionunwrap-static)
- [`values()`](#values)
- [`when()`](#when)
- [`when_empty()`](#when_empty)
- [`when_not_empty()`](#when_not_empty)
- [`where()`](#where)
- [`where_between()`](#where_between)
- [`where_in()`](#where_in)
- [`where_instance_of()`](#where_instance_of)
- [`where_not_between()`](#where_not_between)
- [`where_not_in()`](#where_not_in)
- [`where_not_null()`](#where_not_null)
- [`where_null()`](#where_null)
- [`Collection.wrap()` (static)](#collectionwrap-static)
- [`zip()`](#zip)

---

### `all()`

Returns the raw underlying `list` or `dict`.

```python
collect([1, 2, 3]).all()  # [1, 2, 3]
```

### `average()`

Alias for `avg`.

### `avg()`

Average of the values, or of a dict `key`/callback applied to each item. `None` for an empty collection.

```python
collect([1, 2, 3]).avg()  # 2.0
```

### `chunk()`

Splits the collection into a `Collection` of `Collection`s, each with up to `size` items.

```python
collect([1, 2, 3, 4, 5]).chunk(2).to_list()
# [Collection([1, 2]), Collection([3, 4]), Collection([5])]
```

### `collapse()`

Flattens a collection of lists/collections by one level.

```python
collect([[1, 2], [3, [4, 5]]]).collapse().to_list()  # [1, 2, 3, [4, 5]]
```

### `collect()`

Module-level helper that builds a `Collection`. Equivalent to `Collection(items)`.

```python
collect([1, 2, 3])
collect({"a": 1})
collect()  # empty collection
```

### `Collection()`

Wraps a `list`, `dict`, other iterable, or single value. See the [Installation](/python-collect/installation/) page for the exact construction rules.

### `combine()`

Pairs this collection's values with `values` to build a dict (`{self[i]: values[i]}`).

```python
collect(["a", "b"]).combine([1, 2]).all()  # {"a": 1, "b": 2}
```

### `concat()`

Appends the values of each `other` (list/dict/collection) to a flat list, ignoring dict keys.

### `contains()`

Checks whether the collection contains a matching item. Three call forms:

```python
collect([1, 2, 3]).contains(2)                          # value membership -> True
collect([1, 2, 3]).contains(lambda v, k: v > 2)          # predicate -> True
collect([{"name": "Bob"}]).contains("name", "Bob")        # dict key/value -> True
```

### `contains_one_item()`

`True` when `count() == 1`.

### `count()`

Number of items. Also available via Python's `len()`.

### `count_by()`

Counts items, grouped by `callback(item)` (or by the item's own value when no callback is given). Returns a `Collection` wrapping a dict of counts.

```python
collect(["a", "a", "b"]).count_by().all()  # {"a": 2, "b": 1}
```

### `cross_join()`

Cartesian product of this collection's values with each `other`'s, returned as a `Collection` of `Collection` tuples.

```python
collect([1, 2]).cross_join(["a", "b"]).to_list()
# [Collection([1, 'a']), Collection([1, 'b']), Collection([2, 'a']), Collection([2, 'b'])]
```

### `dd()`

Like `dump()`, but exits the process afterwards (`sys.exit(0)`), useful for "dump and die" debugging.

### `diff()`

Keeps values not present in `items` (compares by value equality).

### `diff_assoc()`

Dict-only: keeps key/value pairs that don't exist with the same value in `items`.

### `diff_keys()`

Dict-only: keeps key/value pairs whose key is absent from `items`.

### `diff_using()`

Like `diff`, but compares with a comparator `callback(a, b)` that returns `0` on equality.

### `doesnt_contain()`

The negation of `contains`, with the same call forms.

### `dump()`

Prints `repr(self)` and returns `self`, so it can be inserted mid-chain.

```python
collect([1, 2, 3]).dump().map(lambda n, i: n * 2)
```

### `duplicates()`

Returns a `Collection` (dict, keyed by original index) of items that are duplicates of an earlier item, optionally compared by `key` (a dict key or a callback).

```python
collect([1, 2, 1, 3, 2]).duplicates().all()  # {2: 1, 4: 2}
```

### `each()`

Calls `callback(value, key_or_index)` for every item. Returning `False` from the callback stops iteration early. Returns `self`.

```python
collect([1, 2, 3]).each(lambda v, i: print(v))
```

### `each_spread()`

Like `each`, but spreads each item (expected to be a list/tuple) as positional arguments to `callback`.

```python
collect([(1, "a"), (2, "b")]).each_spread(lambda n, letter: print(n, letter))
```

### `every()`

`True` if `callback(value, key_or_index)` is truthy for every item.

```python
collect([2, 4, 6]).every(lambda v, i: v % 2 == 0)  # True
```

### `except_()`

Returns all items except those at the given dict keys / list indices.

```python
collect({"a": 1, "b": 2, "c": 3}).except_(["a", "c"]).all()  # {"b": 2}
collect([10, 20, 30, 40]).except_([0, 2]).to_list()           # [20, 40]
```

### `filter()`

Keeps items where `callback(value, key_or_index)` is truthy. Without a callback, keeps truthy values.

```python
collect([0, 1, 2, ""]).filter().to_list()                       # [1, 2]
collect([1, 2, 3, 4]).filter(lambda n, i: n % 2 == 0).to_list()  # [2, 4]
```

### `first()`

Returns the first item, or the first item matching `callback(item)`, or `default` if none found.

```python
collect([1, 2, 3]).first()                # 1
collect([1, 2, 3]).first(lambda n: n > 1) # 2
collect([]).first(default="none")         # "none"
```

### `first_or_fail()`

Like `first`, but raises `CollectionError` instead of returning a default when nothing is found.

```python
collect([1, 2, 3]).first_or_fail(lambda n: n > 10)  # raises CollectionError
```

### `first_where()`

Shorthand for `.where(...).first()`. See [`where`](#where) for the operator/value rules.

```python
collect([{"role": "admin"}, {"role": "user"}]).first_where("role", "admin")
# {"role": "admin"}
```

### `flat_map()`

Maps `callback(item)` over every item then flattens one level (lists, tuples, and collections returned by the callback are spliced in).

```python
collect([1, 2, 3]).flat_map(lambda n: [n, n * 10]).to_list()
# [1, 10, 2, 20, 3, 30]
```

### `flatten()`

Recursively flattens nested lists/dicts/collections, optionally limited to `depth` levels.

```python
collect([[1, [2]], [3, [4]]]).flatten(depth=1).to_list()  # [1, [2], 3, [4]]
collect([[1, [2]], [3, [4]]]).flatten().to_list()          # [1, 2, 3, 4]
```

### `flip()`

Swaps keys and values.

```python
collect({"a": 1, "b": 2}).flip().all()  # {1: "a", 2: "b"}
```

### `forget()`

**Mutating.** Removes the item at `key` (dict key or list index), if present. Returns `self`.

### `for_page()`

Returns the items for a 1-indexed `page` of size `per_page` (built on top of `slice`).

```python
items = collect(range(1, 11))
items.for_page(2, 3).to_list()  # [4, 5, 6]
```

### `get()`

Returns the value at `key` (dict key or list index), or `default` if missing/out of range.

```python
collect({"a": 1}).get("a")         # 1
collect({"a": 1}).get("b", "n/a")  # "n/a"
collect([1, 2, 3]).get(5, "n/a")   # "n/a"
```

### `group_by()`

Groups items into a dict of `Collection`s, keyed by a dict field or by `key(item)` if `key` is callable.

```python
items = collect([{"dept": "Eng"}, {"dept": "Sales"}, {"dept": "Eng"}])
groups = items.group_by("dept")
groups["Eng"].count()  # 2
```

### `has()`

Whether all given dict keys exist (or, for lists, whether all given indices are in range).

```python
collect({"a": 1, "b": 2}).has("a", "b")  # True
collect([1, 2, 3]).has(0, 2)              # True
```

### `implode()`

Joins values into a string. Call with just a separator to join values directly, or with a dict `key` plus `glue` to join a specific field from each item.

```python
collect([1, 2, 3]).implode(", ")                                    # "1, 2, 3"
collect([{"name": "Alice"}, {"name": "Bob"}]).implode("name", ", ")  # "Alice, Bob"
```

### `intersect()`

Keeps values that are present in `items` (compares by value equality).

### `intersect_by_keys()`

Dict-only: keeps key/value pairs whose key is present in `items`.

### `is_empty()`

Whether the collection has zero items.

### `is_not_empty()`

Whether the collection has at least one item.

### `join()`

Joins values into a string with `glue`, using `final_glue` before the last item instead (e.g. for an "Alice, Bob and Carol" style join).

```python
collect(["Alice", "Bob", "Carol"]).join(", ", " and ")
# "Alice, Bob and Carol"
```

### `key_by()`

Re-keys the collection by a dict field or callback. The last item with a given key wins.

```python
collect([{"id": 1, "name": "Alice"}]).key_by("id").all()
# {1: {"id": 1, "name": "Alice"}}
```

### `keys()`

Returns a `Collection` of the dict's keys, or of `range(len(items))` for a list.

### `last()`

Returns the last item, or the last item matching `callback(item)`, or `default`.

```python
collect([1, 2, 3]).last()                # 3
collect([1, 2, 3]).last(lambda n: n < 3) # 2
```

### `Collection.macro()` (static)

Registers a custom method, available on every `Collection` instance afterwards. `callback`'s first parameter receives `self`.

```python
Collection.macro("sum_doubled", lambda self: self.sum() * 2)
collect([1, 2, 3]).sum_doubled()  # 12
```

### `Collection.make()` (static)

Identical to calling `Collection(items)` directly; provided for parity with collect.js/Laravel.

```python
Collection.make([1, 2, 3]).to_list()  # [1, 2, 3]
Collection.make().is_empty()          # True
```

### `map()`

Returns a new collection with `callback(value, key_or_index)` applied to every item, preserving the dict/list shape and keys.

```python
collect([1, 2, 3]).map(lambda n, i: n * 2).to_list()  # [2, 4, 6]
collect({"a": 1}).map(lambda v, k: v + 1).all()        # {"a": 2}
```

### `map_into()`

Maps each item through `cls(item)`.

```python
collect([1, 2]).map_into(str).to_list()  # ["1", "2"]
```

### `map_spread()`

Like `map`, but spreads each item (a list/tuple) as positional arguments to `callback`.

```python
collect([(1, 2), (3, 4)]).map_spread(lambda a, b: a + b).to_list()  # [3, 7]
```

### `map_to_dictionary()`

`callback(item)` returns a `[key, value]` pair; values sharing a key are collected into a list.

```python
items = collect([
    {"dept": "Eng", "name": "Alice"},
    {"dept": "Sales", "name": "Bob"},
    {"dept": "Eng", "name": "Carol"},
])
items.map_to_dictionary(lambda x: [x["dept"], x["name"]]).all()
# {"Eng": ["Alice", "Carol"], "Sales": ["Bob"]}
```

### `map_to_groups()`

Same as `map_to_dictionary`, but groups values into `Collection` instances instead of plain lists.

```python
result = items.map_to_groups(lambda x: [x["dept"], x["name"]])
result["Eng"].to_list()  # ["Alice", "Carol"]
```

### `map_with_keys()`

`callback(item)` must return a `(key, value)` pair (or a single-entry dict); builds a new dict-backed collection from those pairs.

```python
collect([{"id": 1, "name": "Alice"}]).map_with_keys(
    lambda u: (u["id"], u["name"])
).all()
# {1: "Alice"}
```

### `max()`

Maximum value, optionally by dict `key` or callback.

### `median()`

Median value, optionally by dict `key` or callback. `None` for an empty collection.

### `merge()`

Dict + dict merges keys (right-hand side wins on conflicts). Otherwise concatenates as a list.

### `merge_recursive()`

Deep-merges nested dicts/lists. Lists are concatenated; non-collection values are overwritten by the right-hand side.

### `min()`

Minimum value, optionally by dict `key` or callback.

### `mode()`

Most frequent value(s), optionally by dict `key` or callback. Returns a single value, a list of values if there's a tie, or `None` if empty.

### `nth()`

Returns every `step`-th item, optionally starting at `offset`.

```python
collect([1, 2, 3, 4, 5, 6]).nth(2).to_list()        # [1, 3, 5]
collect([1, 2, 3, 4, 5]).nth(2, offset=1).to_list() # [2, 4]
```

### `only()`

Keeps only the given dict keys / list indices.

```python
collect({"a": 1, "b": 2, "c": 3}).only(["a", "c"]).all()  # {"a": 1, "c": 3}
collect([10, 20, 30, 40]).only([0, 2]).to_list()           # [10, 30]
```

### `pad()`

Pads the collection with `value` up to `size` items. A negative `size` pads on the left; the collection is left untouched if it's already at least `abs(size)` long.

```python
collect([1, 2, 3]).pad(5, 0).to_list()   # [1, 2, 3, 0, 0]
collect([1, 2, 3]).pad(-5, 0).to_list()  # [0, 0, 1, 2, 3]
```

### `partition()`

Splits items into two `Collection`s, those for which `callback(item)` is truthy and the rest, returned as a 2-item `Collection`.

```python
passed, failed = collect([1, 2, 3, 4]).partition(lambda n: n % 2 == 0)
passed.to_list()  # [2, 4]
failed.to_list()  # [1, 3]
```

### `pipe()`

Passes the whole collection to `callback` and returns whatever `callback` returns.

```python
collect([1, 2, 3]).pipe(lambda c: c.sum() * 10)  # 60
```

### `pluck()`

Extracts `key` from every dict item. If `key_by` is given, the result is keyed by that field instead of being a plain list.

```python
collect([{"name": "Alice"}, {"name": "Bob"}]).pluck("name").to_list()
# ["Alice", "Bob"]
collect([{"id": 1, "name": "Alice"}]).pluck("name", key_by="id").all()
# {1: "Alice"}
```

### `pop()`

**Mutating.** Removes and returns the last item (or a `Collection` of the last `count` items) from a list-backed collection.

```python
c = collect([1, 2, 3])
c.pop()      # 3
c.to_list()  # [1, 2]
```

### `prepend()`

**Mutating.** Inserts `value` at the front of a list, or with `key` at the front of a dict. Returns `self`.

### `pull()`

**Mutating.** Removes and returns the item at `key` (dict key or list index), or `None` if missing.

```python
c = collect({"a": 1, "b": 2})
c.pull("a")  # 1
c.all()      # {"b": 2}
```

### `push()`

**Mutating.** Appends `item` to a list-backed collection. Returns `self`.

```python
c = collect([1, 2, 3])
c.push(4).to_list()  # [1, 2, 3, 4]
```

### `put()`

**Mutating.** Sets `key` to `value` (dict key or list index). Returns `self`.

```python
c = collect([1, 2, 3])
c.put(0, 99).to_list()  # [99, 2, 3]
```

### `random()`

Without `number`, returns a single random item. With `number`, returns a new `Collection` of `number` random, non-repeating items.

```python
collect([1, 2, 3]).random()
collect([1, 2, 3, 4, 5]).random(2)
```

### `reduce()`

Reduces the collection to a single value via `callback(accumulator, item)`. Without `initial`, the first item seeds the accumulator.

```python
collect([1, 2, 3]).reduce(lambda acc, n: acc + n, 0)  # 6
```

### `reject()`

The inverse of `filter(callback)`: keeps items where the callback is falsy.

```python
collect([1, 2, 3, 4]).reject(lambda n, i: n % 2 == 0).to_list()  # [1, 3]
```

### `replace()`

List + list: overwrites items at matching indices, appending any extra. Dict + dict: same as `merge`.

```python
collect([1, 2, 3]).replace([10, 20]).to_list()  # [10, 20, 3]
```

### `replace_recursive()`

Alias for `merge_recursive`.

### `reverse()`

Reverses item order (or dict insertion order).

### `search()`

Returns the key/index of the first match, or `False` if not found. Accepts a plain value, or a callback `callback(value, key)`.

```python
collect([1, 2, 3]).search(2)                     # 1
collect([1, 2, 3]).search(9)                     # False
collect([1, 2, 3, 4]).search(lambda v, k: v > 2) # 2
```

### `shift()`

**Mutating.** Removes and returns the first item (or a `Collection` of the first `count` items) from a list-backed collection.

```python
c = collect([1, 2, 3])
c.shift()    # 1
c.to_list()  # [2, 3]
```

### `shuffle()`

Returns the items in random order.

### `skip()`

Drops the first `count` items.

### `skip_until()`

Drops items from the start until `callback(item)` becomes truthy, then keeps the rest (including the matching item).

```python
collect([1, 2, 3, 4]).skip_until(lambda n: n == 3).to_list()  # [3, 4]
```

### `skip_while()`

Drops items from the start while `callback(item)` is truthy (or while items equal `callback`, if it's not callable), then keeps the rest.

```python
collect([1, 1, 2, 3]).skip_while(lambda n: n == 1).to_list()  # [2, 3]
```

### `slice()`

Returns a slice of values starting at `offset`, of `length` items (or to the end if omitted).

### `sole()`

Returns the single item in the collection, or, if `key` is given, the single item matching `where(key, value)`. Raises `CollectionError` if zero or more than one item match.

```python
collect([{"role": "admin"}, {"role": "user"}]).sole("role", "admin")
# {"role": "admin"}
collect([{"role": "admin"}, {"role": "admin"}]).sole("role", "admin")
# raises CollectionError (multiple matches)
```

### `some()`

Alias for `contains`.

### `sort()`

Sorts values. Without a callback, uses natural ordering. The callback may be a sort key function, or a two-argument comparator (`cmp(a, b)`), which is detected automatically.

### `sort_by()`

Sorts by a dict `key` or callback applied to each item.

```python
collect([{"age": 30}, {"age": 20}]).sort_by("age").to_list()
# [{"age": 20}, {"age": 30}]
```

### `sort_by_desc()`

`sort_by(key, descending=True)`.

### `sort_desc()`

`sort(callback, reverse=True)`.

### `sort_keys()`

Sorts a dict-backed collection by its keys. No-op on list-backed collections.

### `sort_keys_desc()`

`sort_keys(descending=True)`.

### `splice()`

**Mutating.** Removes items starting at `offset` (all remaining items if `length` is omitted, otherwise `length` items), optionally inserting `replacement` in their place. Returns a `Collection` of the removed items.

```python
c = collect([1, 2, 3, 4, 5])
c.splice(1, 2, [10, 20, 30])
c.to_list()  # [1, 10, 20, 30, 4, 5]
```

### `split()`

Splits the collection into exactly `n` groups, distributing any remainder across the first groups.

### `sum()`

Sums values directly, or via a dict `key` / callback applied to each item.

```python
collect([1, 2, 3]).sum()                            # 6
collect([{"price": 10}, {"price": 5}]).sum("price") # 15
```

### `take()`

Takes the first `limit` items, or the last `abs(limit)` items if `limit` is negative.

```python
collect([1, 2, 3, 4, 5]).take(2).to_list()   # [1, 2]
collect([1, 2, 3, 4, 5]).take(-2).to_list()  # [4, 5]
```

### `take_until()`

Takes items from the start until `callback(item)` becomes truthy (the matching item is excluded).

```python
collect([1, 2, 3, 4]).take_until(lambda n: n == 3).to_list()  # [1, 2]
```

### `take_while()`

Takes items from the start while `callback(item)` is truthy.

```python
collect([1, 1, 2, 3]).take_while(lambda n: n == 1).to_list()  # [1, 1]
```

### `tap()`

Passes a snapshot copy of the collection to `callback` for side effects (e.g. logging), then returns the **original**, unmodified collection. Useful mid-chain.

```python
result = (
    collect([1, 2, 3])
    .tap(lambda c: print("sum is", c.sum()))
    .map(lambda n, i: n * 2)
)
```

### `Collection.times()` (static)

Builds a collection by invoking `callback(i)` for `i` in `1..n`. Without a callback, returns the range itself.

```python
Collection.times(3, lambda i: i * i).to_list()  # [1, 4, 9]
Collection.times(5).to_list()                   # [1, 2, 3, 4, 5]
```

### `to_array()`

Alias for `to_list`.

### `to_json()`

Serialises the collection to a JSON string. `**kwargs` are passed through to `json.dumps` (e.g. `indent=2`). Nested `Collection`s are serialised as their underlying items.

```python
collect([1, 2, 3]).to_json()  # "[1, 2, 3]"
```

### `to_list()`

Returns the collection's values as a plain `list` (dict values, in insertion order, if wrapping a dict).

```python
collect({"a": 1, "b": 2}).to_list()  # [1, 2]
```

### `transform()`

**Mutating.** Like `map`, but replaces the collection's own items instead of returning a new collection.

```python
c = collect([1, 2, 3])
c.transform(lambda v, i: v * 10)
c.to_list()  # [10, 20, 30]
```

### `undot()`

Expands dot-notation dict keys into nested dicts.

```python
collect({"user.name": "Alice", "user.age": 30}).undot().all()
# {"user": {"name": "Alice", "age": 30}}
```

### `union()`

Dict-only: merges keys, but the **original** collection's values win on conflicts (opposite of `merge`).

```python
collect({"a": 1, "b": 2}).union({"b": 9, "c": 3}).all()
# {"b": 2, "c": 3, "a": 1}  (same keys/values as {"a": 1, "b": 2, "c": 3}, original values win)
```

### `unique()`

Removes duplicate values, optionally comparing by a dict `key` or callback. Keeps the first occurrence.

### `unless()`

The inverse of `when`: runs `callback` when `condition` (or `condition(self)` if callable) is falsy.

### `unless_empty()`

Runs `callback` when the collection is **not** empty (same as `when_not_empty`).

### `unless_not_empty()`

Runs `callback` when the collection **is** empty (same as `when_empty`).

### `Collection.unwrap()` (static)

The inverse of `wrap`: returns the underlying `list`/`dict` if `value` is a `Collection`, otherwise returns `value` unchanged.

```python
Collection.unwrap(collect([1, 2, 3]))  # [1, 2, 3]
Collection.unwrap([1, 2, 3])           # [1, 2, 3]
```

### `values()`

Returns a `Collection` of just the values, discarding dict keys.

### `when()`

If `condition` (or `condition(self)` if callable) is truthy, runs `callback(self)` and returns its result (or `self` if the callback returns a falsy value, since chain methods are expected to return a collection). Otherwise runs `default(self)` if provided, else returns `self`.

```python
collect([1, 2, 3]).when(True, lambda c: c.push(4)).to_list()   # [1, 2, 3, 4]
collect([1, 2, 3]).when(False, lambda c: c.push(4)).to_list()  # [1, 2, 3]
```

### `when_empty()`

Shorthand for `when(self.is_empty(), ...)`.

### `when_not_empty()`

Shorthand for `when(self.is_not_empty(), ...)`.

### `where()`

Filters dict items by a field. Call with just a value for equality, or with an explicit operator: `=`, `==`, `!=`, `<>`, `<`, `>`, `<=`, `>=`, `===` (identity), `!==`.

```python
collect([{"age": 18}, {"age": 30}]).where("age", ">=", 21).to_list()
# [{"age": 30}]
collect([{"role": "admin"}]).where("role", "admin").to_list()
# [{"role": "admin"}]
```

### `where_between()`

Keeps items whose `key` field falls within `[values[0], values[1]]` inclusive.

### `where_in()`

Keeps items whose `key` field is in `values`.

### `where_instance_of()`

Keeps items that are instances of `cls`.

```python
collect([1, "a", 2, "b"]).where_instance_of(int).to_list()  # [1, 2]
```

### `where_not_between()`

Excludes items whose `key` field falls within `[values[0], values[1]]` inclusive.

### `where_not_in()`

Excludes items whose `key` field is in `values`.

### `where_not_null()`

Keeps items whose `key` field is not `None`.

### `where_null()`

Keeps items whose `key` field is `None`.

### `Collection.wrap()` (static)

Wraps `value` in a `Collection` if it isn't one already. Lists and dicts become the collection's items; any other scalar becomes a single-item list.

```python
Collection.wrap("hello").to_list()    # ["hello"]
Collection.wrap([1, 2, 3]).to_list()  # [1, 2, 3]
Collection.wrap(existing_collection) is existing_collection  # True
```

### `zip()`

Zips this collection's values with each `other`'s, element-wise, into a `Collection` of `Collection` tuples.

```python
collect([1, 2, 3]).zip(["a", "b", "c"]).to_list()
# [Collection([1, 'a']), Collection([2, 'b']), Collection([3, 'c'])]
```
