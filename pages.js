// Educational Pages Manager
class PagesManager {
    constructor() {
        this.pages = [
            {
                id: 1,
                title: "JavaScript Security Best Practices",
                description: "Learn how to write secure JavaScript code and avoid common vulnerabilities",
                icon: "fa-shield-alt",
                category: "security",
                content: `# JavaScript Security Best Practices

## Common Vulnerabilities

### 1. Cross-Site Scripting (XSS)
**Problem**: Untrusted data in innerHTML, document.write()
**Solution**: Use textContent, sanitize with DOMPurify

\`\`\`javascript
// BAD
element.innerHTML = userInput;

// GOOD
element.textContent = userInput;
// OR
element.innerHTML = DOMPurify.sanitize(userInput);
\`\`\`

### 2. Eval() Dangers
**Problem**: Arbitrary code execution
**Solution**: Avoid eval(), use JSON.parse() instead

### 3. Prototype Pollution
**Problem**: Modifying Object.prototype
**Solution**: Use Object.freeze(), validate inputs

## Security Libraries
- DOMPurify: HTML sanitization
- Helmet: HTTP header security
- validator.js: Input validation

## Key Principles
1. Never trust user input
2. Validate and sanitize all data
3. Use Content Security Policy (CSP)
4. Keep dependencies updated`
            },
            {
                id: 2,
                title: "Python Performance Optimization",
                description: "Techniques to make your Python code run faster and use less memory",
                icon: "fa-tachometer-alt",
                category: "performance",
                content: `# Python Performance Optimization

## Common Bottlenecks

### 1. Loop Optimization
\`\`\`python
# SLOW
result = []
for item in large_list:
    if condition(item):
        result.append(process(item))

# FAST using list comprehension
result = [process(item) for item in large_list if condition(item)]

# EVEN FASTER using generator
result = (process(item) for item in large_list if condition(item))
\`\`\`

### 2. String Concatenation
\`\`\`python
# SLOW in loops
s = ""
for substring in list_of_strings:
    s += substring

# FAST
s = "".join(list_of_strings)
\`\`\`

### 3. Use Built-in Functions
- map(), filter() vs loops
- Use set for membership testing (O(1) vs O(n))

## Profiling Tools
- cProfile: Function-level profiling
- timeit: Timing small code snippets
- memory_profiler: Memory usage tracking

## Advanced Techniques
1. Use NumPy for numerical computations
2. Implement caching with functools.lru_cache
3. Consider Cython for critical sections
4. Use async/await for I/O bound tasks`
            },
            {
                id: 3,
                title: "Java Memory Management",
                description: "Understanding garbage collection and memory optimization in Java",
                icon: "fa-memory",
                category: "performance",
                content: `# Java Memory Management

## Garbage Collection Types

### 1. Serial GC
- Single-threaded, good for small applications
- Use: -XX:+UseSerialGC

### 2. Parallel GC (Throughput Collector)
- Multiple threads for minor GC
- Use: -XX:+UseParallelGC

### 3. G1 (Garbage First)
- Default since Java 9
- Predictable pause times
- Use: -XX:+UseG1GC

## Common Memory Issues

### 1. Memory Leaks
\`\`\`java
// LEAK: Static collections holding references
public class LeakyClass {
    private static final List<Object> CACHE = new ArrayList<>();
    
    public void addToCache(Object obj) {
        CACHE.add(obj); // Objects never removed
    }
}
\`\`\`

### 2. String Concatenation
\`\`\`java
// INEFFICIENT
String result = "";
for (int i = 0; i < 1000; i++) {
    result += i; // Creates new String each iteration
}

// EFFICIENT
StringBuilder result = new StringBuilder();
for (int i = 0; i < 1000; i++) {
    result.append(i);
}
String finalResult = result.toString();
\`\`\`

## Best Practices
1. Use StringBuilder for string concatenation in loops
2. Close resources in finally blocks or use try-with-resources
3. Be cautious with static collections
4. Profile with VisualVM or Java Mission Control`
            },
            {
                id: 4,
                title: "TypeScript Type Safety",
                description: "Leverage TypeScript's type system to catch errors at compile time",
                icon: "fa-tshirt",
                category: "quality",
                content: `# TypeScript Type Safety

## Type System Benefits

### 1. Catch Errors Early
\`\`\`typescript
// JavaScript (runtime error)
function calculateTotal(price, quantity) {
    return price * quantity; // What if quantity is string?
}

// TypeScript (compile-time error)
function calculateTotal(price: number, quantity: number): number {
    return price * quantity; // Type-safe
}
\`\`\`

### 2. Better Tooling
- Autocomplete
- Refactoring support
- Navigation

## Advanced Types

### 1. Union Types
\`\`\`typescript
type Status = 'active' | 'inactive' | 'pending';

function setStatus(status: Status) {
    // Can only be one of the three values
}
\`\`\`

### 2. Generic Types
\`\`\`typescript
interface Response<T> {
    data: T;
    status: number;
    message: string;
}

const userResponse: Response<User> = {
    data: { id: 1, name: 'John' },
    status: 200,
    message: 'Success'
};
\`\`\`

## Best Practices
1. Enable strict mode in tsconfig.json
2. Use interfaces for object shapes
3. Avoid any type when possible
4. Use unknown instead of any for uncertain types`
            },
            {
                id: 5,
                title: "SQL Injection Prevention",
                description: "Learn how to protect your database from SQL injection attacks",
                icon: "fa-database",
                category: "security",
                content: `# SQL Injection Prevention

## The Problem

### Vulnerable Code
\`\`\`php
// BAD - Vulnerable to SQL injection
$query = "SELECT * FROM users WHERE id = " . $_GET['id'];
$result = mysqli_query($conn, $query);
\`\`\`

Attackers can input: \`1 OR 1=1\` to bypass authentication.

## Solutions

### 1. Prepared Statements (Parameterized Queries)
\`\`\`php
// GOOD - Using prepared statements
$stmt = $conn->prepare("SELECT * FROM users WHERE id = ?");
$stmt->bind_param("i", $_GET['id']);
$stmt->execute();
$result = $stmt->get_result();
\`\`\`

### 2. Input Validation
\`\`\`python
# Validate input is integer
user_id = request.GET.get('id')
if not user_id.isdigit():
    raise ValueError("Invalid user ID")

# Use parameterized query
cursor.execute("SELECT * FROM users WHERE id = %s", (user_id,))
\`\`\`

## ORM Protection
Most ORMs automatically use parameterized queries:

\`\`\`javascript
// Sequelize (Node.js)
User.findOne({ where: { id: req.params.id } });

// Django ORM (Python)
User.objects.get(id=user_id)
\`\`\`

## Additional Defenses
1. Principle of least privilege for database users
2. Regular security updates
3. Web Application Firewall (WAF)
4. Input sanitization (but never rely on it alone)`
            },
            {
                id: 6,
                title: "React Performance Optimization",
                description: "Techniques to improve React application performance",
                icon: "fa-react",
                category: "performance",
                content: `# React Performance Optimization

## Common Issues

### 1. Unnecessary Re-renders
\`\`\`jsx
// BAD - Component re-renders on every parent render
function MyComponent({ data }) {
    return <div>{data.value}</div>;
}

// GOOD - Memoized component
const MyComponent = React.memo(function MyComponent({ data }) {
    return <div>{data.value}</div>;
});
\`\`\`

### 2. Inline Function Creation
\`\`\`jsx
// BAD - New function on every render
<button onClick={() => handleClick(item.id)}>Click</button>

// GOOD - Memoized callback
const handleClick = useCallback((id) => {
    // handler logic
}, [dependencies]);

<button onClick={handleClick}>Click</button>
\`\`\`

## Optimization Techniques

### 1. Code Splitting
\`\`\`javascript
// Dynamic import for code splitting
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

function MyApp() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <HeavyComponent />
        </Suspense>
    );
}
\`\`\`

### 2. Virtualization for Long Lists
Use libraries like react-window or react-virtualized for rendering large lists efficiently.

## Tools for Profiling
1. React DevTools Profiler
2. Chrome Performance Tab
3. Bundle Analyzers

## Best Practices
1. Use React.memo for pure components
2. Implement shouldComponentUpdate or PureComponent
3. Avoid inline styles and object literals in props
4. Use useMemo for expensive calculations`
            },
            {
                id: 7,
                title: "Ruby Metaprogramming",
                description: "Understanding and using Ruby's powerful metaprogramming capabilities",
                icon: "fa-gem",
                category: "advanced",
                content: `# Ruby Metaprogramming

## What is Metaprogramming?
Writing code that writes or manipulates code at runtime.

## Core Concepts

### 1. send() Method
\`\`\`ruby
class Calculator
  def add(x, y)
    x + y
  end
end

calc = Calculator.new
result = calc.send(:add, 2, 3)  # => 5
\`\`\`

### 2. define_method
\`\`\`ruby
class Person
  [:name, :age, :email].each do |attribute|
    define_method(attribute) do
      instance_variable_get("@#{attribute}")
    end
    
    define_method("#{attribute}=") do |value|
      instance_variable_set("@#{attribute}", value)
    end
  end
end

person = Person.new
person.name = "John"
puts person.name  # => "John"
\`\`\`

### 3. method_missing
\`\`\`ruby
class DynamicProxy
  def initialize(target)
    @target = target
  end
  
  def method_missing(method_name, *args, &block)
    if @target.respond_to?(method_name)
      @target.send(method_name, *args, &block)
    else
      super
    end
  end
end
\`\`\`

## Practical Examples

### 1. DSL Creation
\`\`\`ruby
class Settings
  def self.config(&block)
    instance = new
    instance.instance_eval(&block)
    instance
  end
  
  def database(settings)
    @database = settings
  end
end

config = Settings.config do
  database adapter: 'postgresql', pool: 5
end
\`\`\`

## Best Practices
1. Use metaprogramming sparingly
2. Always implement respond_to_missing?
3. Document metaprogrammed methods
4. Consider performance implications
5. Test thoroughly`
            },
            {
                id: 8,
                title: "Swift Memory Management",
                description: "Understanding ARC and memory management in Swift",
                icon: "fa-apple",
                category: "performance",
                content: `# Swift Memory Management

## Automatic Reference Counting (ARC)

### How ARC Works
- Counts references to each class instance
- Deallocates when reference count reaches zero
- Only for reference types (classes)

### Reference Cycles
\`\`\`swift
class Person {
    let name: String
    var apartment: Apartment?
    
    init(name: String) {
        self.name = name
    }
}

class Apartment {
    let unit: String
    var tenant: Person?
    
    init(unit: String) {
        self.unit = unit
    }
}

var john: Person? = Person(name: "John")
var unit4A: Apartment? = Apartment(unit: "4A")

john!.apartment = unit4A
unit4A!.tenant = john  // Reference cycle!
\`\`\`

## Breaking Reference Cycles

### 1. Weak References
\`\`\`swift
class Apartment {
    let unit: String
    weak var tenant: Person?  // Weak reference
    
    init(unit: String) {
        self.unit = unit
    }
}
\`\`\`

### 2. Unowned References
Use when the reference always has a value and won't become nil.

## Memory Optimization Tips

### 1. Use Value Types When Possible
\`\`\`swift
// Prefer struct for simple data
struct Point {
    var x: Double
    var y: Double
}
\`\`\`

### 2. Lazy Properties
\`\`\`swift
class DataManager {
    lazy var importer = DataImporter()  // Initialized on first use
}
\`\`\`

## Tools
- Xcode Memory Graph Debugger
- Instruments Allocation Tool
- Debug Memory Graph`
            },
            {
                id: 9,
                title: "Go Concurrency Patterns",
                description: "Master Go's goroutines and channels for concurrent programming",
                icon: "fa-code-branch",
                category: "advanced",
                content: `# Go Concurrency Patterns

## Goroutines
Lightweight threads managed by the Go runtime.

### Basic Goroutine
\`\`\`go
package main

import (
    "fmt"
    "time"
)

func say(s string) {
    for i := 0; i < 5; i++ {
        time.Sleep(100 * time.Millisecond)
        fmt.Println(s)
    }
}

func main() {
    go say("world")  // Start goroutine
    say("hello")     // Main goroutine
}
\`\`\`

## Channels
Typed conduits for communication between goroutines.

### Basic Channel
\`\`\`go
func sum(s []int, c chan int) {
    sum := 0
    for _, v := range s {
        sum += v
    }
    c <- sum  // Send sum to channel
}

func main() {
    s := []int{7, 2, 8, -9, 4, 0}
    
    c := make(chan int)
    go sum(s[:len(s)/2], c)
    go sum(s[len(s)/2:], c)
    
    x, y := <-c, <-c  // Receive from channel
    fmt.Println(x, y, x+y)
}
\`\`\`

## Common Patterns

### 1. Worker Pool
\`\`\`go
func worker(id int, jobs <-chan int, results chan<- int) {
    for j := range jobs {
        fmt.Printf("worker %d started job %d\n", id, j)
        time.Sleep(time.Second)
        fmt.Printf("worker %d finished job %d\n", id, j)
        results <- j * 2
    }
}
\`\`\`

### 2. Select Statement
\`\`\`go
select {
case msg1 := <-c1:
    fmt.Println("received", msg1)
case msg2 := <-c2:
    fmt.Println("received", msg2)
}
\`\`\`

## Best Practices
1. Use buffered channels wisely
2. Always close channels when done
3. Use context for cancellation
4. Avoid goroutine leaks
5. Use the race detector: \`go run -race\``
            },
            {
                id: 10,
                title: "Rust Ownership System",
                description: "Understanding Rust's unique ownership, borrowing, and lifetimes",
                icon: "fa-rust",
                category: "advanced",
                content: `# Rust Ownership System

## Ownership Rules
1. Each value has an owner
2. Only one owner at a time
3. Value is dropped when owner goes out of scope

## Basic Ownership
\`\`\`rust
fn main() {
    let s1 = String::from("hello");  // s1 owns the string
    let s2 = s1;                     // Ownership moves to s2
    
    // println!("{}", s1);           // ERROR: s1 no longer valid
    println!("{}", s2);              // OK: s2 owns the string
}
\`\`\`

## Borrowing (References)

### Immutable Borrows
\`\`\`rust
fn calculate_length(s: &String) -> usize {
    s.len()  // s is a reference, doesn't take ownership
}

fn main() {
    let s1 = String::from("hello");
    let len = calculate_length(&s1);
    println!("Length: {}", len);  // s1 still valid
}
\`\`\`

### Mutable Borrows
\`\`\`rust
fn change(s: &mut String) {
    s.push_str(", world");
}

fn main() {
    let mut s = String::from("hello");
    change(&mut s);
    println!("{}", s);  // "hello, world"
}
\`\`\`

### Borrowing Rules
1. One mutable reference OR multiple immutable references
2. References must always be valid

## Common Patterns

### Struct with References
\`\`\`rust
struct Book<'a> {
    title: &'a str,
    author: &'a str,
}

fn main() {
    let title = String::from("The Rust Programming Language");
    let book = Book {
        title: &title,
        author: "Steve Klabnik",
    };
    println!("{} by {}", book.title, book.author);
}
\`\`\`

## Best Practices
1. Prefer borrowing over cloning
2. Use lifetimes to prevent dangling references
3. Leverage the borrow checker during development
4. Use smart pointers for complex ownership patterns

The ownership system is Rust's most distinctive feature, enabling memory safety without garbage collection.`
            },
            {
                id: 11,
                title: "Kotlin Coroutines",
                description: "Asynchronous programming with Kotlin coroutines",
                icon: "fa-android",
                category: "performance",
                content: `# Kotlin Coroutines

## What are Coroutines?
Lightweight threads for asynchronous programming.

### Basic Coroutine
\`\`\`kotlin
import kotlinx.coroutines.*

fun main() {
    GlobalScope.launch {  // Launch a new coroutine
        delay(1000L)      // Non-blocking delay
        println("World!")
    }
    println("Hello,")
    Thread.sleep(2000L)   // Block main thread
}
\`\`\`

## Structured Concurrency

### runBlocking
\`\`\`kotlin
fun main() = runBlocking {
    launch {
        delay(1000L)
        println("World!")
    }
    println("Hello,")
}
\`\`\`

### async/await
\`\`\`kotlin
fun main() = runBlocking {
    val deferred1 = async {
        delay(1000L)
        "Hello"
    }
    
    val deferred2 = async {
        delay(1000L)
        "World"
    }
    
    println("${deferred1.await()} ${deferred2.await()}!")
}
\`\`\`

## Dispatchers
Control which thread the coroutine runs on.

### Common Dispatchers
\`\`\`kotlin
launch(Dispatchers.Default) {  // CPU-intensive work
    // Runs in background thread pool
}

launch(Dispatchers.IO) {  // I/O operations
    // Optimized for I/O operations
}

launch(Dispatchers.Main) {  // UI updates (Android)
    // Runs on main thread
}
\`\`\`

## Best Practices

### 1. Cancel Coroutines
\`\`\`kotlin
fun main() = runBlocking {
    val job = launch {
        repeat(1000) { i ->
            println("I'm sleeping $i ...")
            delay(500L)
        }
    }
    
    delay(1300L)
    job.cancel()
    job.join()
}
\`\`\`

### 2. Handle Exceptions
\`\`\`kotlin
fun main() = runBlocking {
    val handler = CoroutineExceptionHandler { _, exception ->
        println("Caught $exception")
    }
    
    val job = GlobalScope.launch(handler) {
        throw AssertionError()
    }
    job.join()
}
\`\`\`

## Performance Tips
1. Use appropriate dispatchers
2. Avoid blocking calls in coroutines
3. Use channels for communication between coroutines
4. Prefer flows for streams of data
5. Use structured concurrency to prevent leaks`
            },
            {
                id: 12,
                title: "Scala Functional Programming",
                description: "Functional programming concepts and patterns in Scala",
                icon: "fa-scala",
                category: "advanced",
                content: `# Scala Functional Programming

## Core Concepts

### Immutability
\`\`\`scala
// Mutable (avoid when possible)
var mutableValue = 10
mutableValue = 20  // Can be reassigned

// Immutable (preferred)
val immutableValue = 10
// immutableValue = 20  // ERROR: Cannot reassign
\`\`\`

### Pure Functions
\`\`\`scala
// Pure function: No side effects, same input -> same output
def pureAdd(a: Int, b: Int): Int = a + b
\`\`\`

## Collections API

### Transformations
\`\`\`scala
val numbers = List(1, 2, 3, 4, 5)

// Map: Transform each element
val doubled = numbers.map(_ * 2)  // List(2, 4, 6, 8, 10)

// Filter: Select elements
val evens = numbers.filter(_ % 2 == 0)  // List(2, 4)

// FlatMap: Transform and flatten
val nested = List(List(1, 2), List(3, 4))
val flattened = nested.flatMap(identity)  // List(1, 2, 3, 4)
\`\`\`

### Reductions
\`\`\`scala
val numbers = List(1, 2, 3, 4, 5)

// Fold: General reduction
val sum = numbers.fold(0)(_ + _)  // 15

// Reduce: Similar to fold but doesn't need initial value
val product = numbers.reduce(_ * _)  // 120
\`\`\`

## Pattern Matching

### Basic Pattern Matching
\`\`\`scala
def describe(x: Any): String = x match {
    case 1 => "one"
    case "hello" => "greeting"
    case true => "boolean true"
    case Nil => "empty list"
    case _ => "something else"
}
\`\`\`

### Case Class Matching
\`\`\`scala
sealed trait Shape
case class Circle(radius: Double) extends Shape
case class Rectangle(width: Double, height: Double) extends Shape

def area(shape: Shape): Double = shape match {
    case Circle(r) => math.Pi * r * r
    case Rectangle(w, h) => w * h
}
\`\`\`

## For Comprehensions

### Basic For Comprehension
\`\`\`scala
val result = for {
    x <- List(1, 2, 3)
    y <- List(4, 5, 6)
} yield (x, y)
// List((1,4), (1,5), (1,6), (2,4), (2,5), (2,6), (3,4), (3,5), (3,6))
\`\`\`

### With Guards
\`\`\`scala
val result = for {
    x <- 1 to 10
    y <- 1 to 10
    if x + y == 10
    if x < y
} yield (x, y)
// Vector((1,9), (2,8), (3,7), (4,6))
\`\`\`

## Monads

### Option Monad
\`\`\`scala
def divide(x: Double, y: Double): Option[Double] = {
    if (y != 0) Some(x / y) else None
}

val result = for {
    a <- divide(10, 2)
    b <- divide(a, 5)
    c <- divide(b, 0)  // This will be None
} yield c

println(result)  // None
\`\`\`

## Best Practices

### 1. Prefer Immutability
\`\`\`scala
// BAD
var collection = List(1, 2, 3)
collection = collection :+ 4

// GOOD
val collection = List(1, 2, 3)
val newCollection = collection :+ 4
\`\`\`

### 2. Use Tail Recursion
\`\`\`scala
// Tail recursive (optimized by compiler)
def factorialTailRec(n: Int): Int = {
    @annotation.tailrec
    def loop(acc: Int, n: Int): Int = {
        if (n <= 1) acc
        else loop(acc * n, n - 1)
    }
    loop(1, n)
}
\`\`\`

## Common Libraries
- Cats: Functional programming library
- ZIO: Type-safe, composable asynchronous programming
- fs2: Functional streams

Scala's functional programming features enable writing expressive, type-safe, and maintainable code.`
            },
            {
                id: 13,
                title: "C++ Modern Features",
                description: "C++11/14/17/20 features and best practices",
                icon: "fa-cplusplus",
                category: "advanced",
                content: `# C++ Modern Features

## C++11 Features

### Auto Type Deduction
\`\`\`cpp
auto x = 5;              // int
auto y = 3.14;           // double
auto z = "hello";        // const char*

// Useful in templates and iterators
for (auto it = vec.begin(); it != vec.end(); ++it) {
    // it is automatically the right iterator type
}
\`\`\`

### Range-based For Loops
\`\`\`cpp
std::vector<int> numbers = {1, 2, 3, 4, 5};

// By value (copies)
for (int num : numbers) {
    std::cout << num << " ";
}

// By reference (no copy, can modify)
for (int& num : numbers) {
    num *= 2;
}
\`\`\`

### Lambda Expressions
\`\`\`cpp
// Basic lambda
auto add = [](int a, int b) { return a + b; };
std::cout << add(3, 4) << std::endl;  // 7

// Lambda with capture
int x = 10;
auto multiply = [x](int y) { return x * y; };
std::cout << multiply(5) << std::endl;  // 50
\`\`\`

### Smart Pointers
\`\`\`cpp
#include <memory>

// Unique pointer (exclusive ownership)
auto ptr = std::make_unique<int>(42);

// Shared pointer (shared ownership)
auto shared1 = std::make_shared<int>(42);
auto shared2 = shared1;  // Both share ownership

// Avoid raw pointers when possible
\`\`\`

## C++17 Features

### Structured Bindings
\`\`\`cpp
std::pair<int, std::string> getPair() {
    return {42, "answer"};
}

// C++17: Structured binding
auto [value, name] = getPair();
std::cout << value << ": " << name << std::endl;
\`\`\`

### std::optional
\`\`\`cpp
#include <optional>

std::optional<int> divide(int a, int b) {
    if (b != 0) return a / b;
    return std::nullopt;  // No value
}

auto result = divide(10, 2);
if (result) {
    std::cout << "Result: " << *result << std::endl;
}
\`\`\`

## C++20 Features

### Concepts
\`\`\`cpp
template<typename T>
concept Addable = requires(T a, T b) {
    { a + b } -> std::same_as<T>;
};

template<Addable T>
T sum(T a, T b) {
    return a + b;
}
\`\`\`

### Ranges
\`\`\`cpp
#include <ranges>
#include <vector>

std::vector<int> numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

auto result = numbers 
    | std::views::filter([](int n) { return n % 2 == 0; })
    | std::views::transform([](int n) { return n * n; });

for (int n : result) {
    std::cout << n << " ";  // 4 16 36 64 100
}
\`\`\`

## Best Practices

### 1. Use RAII (Resource Acquisition Is Initialization)
\`\`\`cpp
class FileHandler {
    FILE* file;
public:
    explicit FileHandler(const char* filename) 
        : file(fopen(filename, "r")) {
        if (!file) throw std::runtime_error("Failed to open file");
    }
    
    ~FileHandler() {
        if (file) fclose(file);
    }
};
\`\`\`

### 2. Use constexpr and consteval
\`\`\`cpp
// Compile-time computation
constexpr int factorial(int n) {
    return (n <= 1) ? 1 : n * factorial(n - 1);
}

constexpr int max_size = factorial(5);  // 120
\`\`\`

## Performance Tips

### 1. Move Semantics
\`\`\`cpp
class LargeObject {
    std::vector<int> data;
public:
    // Move constructor
    LargeObject(LargeObject&& other) noexcept 
        : data(std::move(other.data)) {}
};
\`\`\`

### 2. Perfect Forwarding
\`\`\`cpp
template<typename T>
void wrapper(T&& arg) {
    another_function(std::forward<T>(arg));
}
\`\`\`

Modern C++ provides powerful features that enable writing safer, more efficient, and more expressive code.`
            },
            {
                id: 14,
                title: "PHP Security Best Practices",
                description: "Essential security practices for PHP applications",
                icon: "fa-php",
                category: "security",
                content: `# PHP Security Best Practices

## Input Validation and Sanitization

### Validate Input
\`\`\`php
<?php
// Validate email
$email = $_POST['email'];
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die('Invalid email address');
}

// Validate integer
$id = $_GET['id'];
if (!filter_var($id, FILTER_VALIDATE_INT)) {
    die('Invalid ID');
}
?>
\`\`\`

### Sanitize Input
\`\`\`php
<?php
// Sanitize string
$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
$name = htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8');

// Sanitize email
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
?>
\`\`\`

## SQL Injection Prevention

### Prepared Statements with PDO
\`\`\`php
<?php
$pdo = new PDO('mysql:host=localhost;dbname=test', 'user', 'pass');

// Prepared statement
$stmt = $pdo->prepare('SELECT * FROM users WHERE email = :email');
$stmt->execute([':email' => $_POST['email']]);

$user = $stmt->fetch(PDO::FETCH_ASSOC);
?>
\`\`\`

## Cross-Site Scripting (XSS) Protection

### Output Escaping
\`\`\`php
<?php
function escapeHTML($string) {
    return htmlspecialchars($string, ENT_QUOTES | ENT_HTML5, 'UTF-8');
}

echo '<div>' . escapeHTML($userInput) . '</div>';
?>
\`\`\`

### Content Security Policy (CSP)
\`\`\`php
<?php
header("Content-Security-Policy: default-src 'self'; script-src 'self'");
?>
\`\`\`

## Cross-Site Request Forgery (CSRF) Protection

### CSRF Tokens
\`\`\`php
<?php
session_start();

// Generate token
function generateToken() {
    return bin2hex(random_bytes(32));
}

// Store token in session
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = generateToken();
}

// Add to form
echo '<input type="hidden" name="csrf_token" value="' . $_SESSION['csrf_token'] . '">';

// Validate on form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if ($_SESSION['csrf_token'] !== $_POST['csrf_token']) {
        die('Invalid CSRF token');
    }
}
?>
\`\`\`

## Password Security

### Password Hashing
\`\`\`php
<?php
// Create password hash
$password = $_POST['password'];
$hash = password_hash($password, PASSWORD_DEFAULT);

// Verify password
if (password_verify($_POST['password'], $hash)) {
    // Password correct
}
?>
\`\`\`

## Secure Headers

### HTTP Security Headers
\`\`\`php
<?php
header('X-Frame-Options: DENY'); // Prevent clickjacking
header('X-XSS-Protection: 1; mode=block');
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: strict-origin-when-cross-origin');

// HSTS (HTTPS Strict Transport Security)
header('Strict-Transport-Security: max-age=31536000');
?>
\`\`\`

PHP security is an ongoing process that requires vigilance and regular maintenance. By implementing these best practices, you can significantly reduce the risk of security breaches.`
            },
            {
                id: 15,
                title: "HTML/CSS Security",
                description: "Security considerations for front-end development",
                icon: "fa-html5",
                category: "security",
                content: `# HTML/CSS Security

## Cross-Site Scripting (XSS) Prevention

### Context-Aware Output Encoding
\`\`\`html
<!-- HTML Context -->
<div><%- userContent %></div>  <!-- Escaped output -->

<!-- Attribute Context -->
<input value="<%- userContent %>">  <!-- Escaped -->

<!-- JavaScript Context -->
<script>
  var data = "<%- JSON.stringify(userContent) %>";  <!-- Stringified -->
</script>
\`\`\`

### Safe HTML Practices
\`\`\`html
<!-- UNSAFE -->
<div><%= userContent %></div>  <!-- Raw HTML -->

<!-- SAFE with proper escaping -->
<div>${escapeHTML(userContent)}</div>

<!-- SAFE with textContent (JavaScript) -->
<script>
element.textContent = userContent;
</script>
\`\`\`

## Content Security Policy (CSP)

### Basic CSP Implementation
\`\`\`html
<!-- HTTP Header (Preferred) -->
<!-- Content-Security-Policy: default-src 'self'; -->

<!-- Meta Tag (Fallback) -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self';
               script-src 'self' https://apis.google.com;
               style-src 'self' 'unsafe-inline';
               img-src 'self' data: https:;
               font-src 'self' https://fonts.gstatic.com;">
\`\`\`

## Subresource Integrity (SRI)

### SRI Implementation
\`\`\`html
<!-- External scripts with integrity checks -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
        crossorigin="anonymous"></script>

<!-- External stylesheets with integrity checks -->
<link rel="stylesheet" 
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous">
\`\`\`

## Clickjacking Protection

### X-Frame-Options
\`\`\`html
<!-- HTTP Header -->
<!-- X-Frame-Options: DENY -->

<!-- Meta Tag (less effective) -->
<meta http-equiv="X-Frame-Options" content="deny">

<!-- Alternative: frame-ancestors in CSP -->
<meta http-equiv="Content-Security-Policy" 
      content="frame-ancestors 'none';">
\`\`\`

## Secure Forms

### Form Security Measures
\`\`\`html
<form method="POST" action="/submit">
    
    <!-- CSRF Token -->
    <input type="hidden" name="csrf_token" value="<%= csrfToken %>">
    
    <!-- Secure password field -->
    <input type="password" 
           name="password" 
           minlength="8" 
           maxlength="128"
           pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
           title="Must contain at least one number, one uppercase and lowercase letter"
           required>
    
    <!-- Email with validation -->
    <input type="email" 
           name="email" 
           pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
           required>
</form>
\`\`\`

## Secure Cookies

### Cookie Security Attributes
\`\`\`javascript
// Secure cookie settings
document.cookie = "sessionId=abc123; " +
                 "path=/; " +
                 "max-age=3600; " +
                 "secure; " +      // HTTPS only
                 "httponly; " +    // No JavaScript access
                 "samesite=strict"; // Prevent CSRF
\`\`\`

## CORS Security

### CORS Configuration
\`\`\`javascript
// Server-side CORS headers
// Access-Control-Allow-Origin: https://trusted-domain.com
// Access-Control-Allow-Credentials: true
// Access-Control-Allow-Methods: GET, POST, PUT, DELETE
// Access-Control-Allow-Headers: Content-Type, Authorization
\`\`\`

## HTTPS and Mixed Content

### Force HTTPS
\`\`\`html
<!-- Canonical URL -->
<link rel="canonical" href="https://example.com/page">

<!-- HSTS Preload -->
<!-- Include in response header: Strict-Transport-Security: max-age=31536000; includeSubDomains; preload -->

<!-- Upgrade insecure requests -->
<meta http-equiv="Content-Security-Policy" 
      content="upgrade-insecure-requests;">
\`\`\`

### Prevent Mixed Content
\`\`\`html
<!-- Block all mixed content -->
<meta http-equiv="Content-Security-Policy" 
      content="block-all-mixed-content;">

<!-- Use HTTPS URLs -->
<script src="https://cdn.example.com/library.js"></script>
\`\`\`

## Security Headers Checklist

### Essential Security Headers
\`\`\`http
Content-Security-Policy: default-src 'self'; script-src 'self'
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
Strict-Transport-Security: max-age=31536000; includeSubDomains
Set-Cookie: sessionId=abc123; Secure; HttpOnly; SameSite=Strict
\`\`\`

## Tools for Testing Security

### Header Testing
\`\`\`bash
# Check headers with curl
curl -I https://example.com

# Check security headers
npx check-headers https://example.com
\`\`\`

### SSL/TLS Testing
\`\`\`bash
# Check SSL configuration
openssl s_client -connect example.com:443

# Use ssllabs.com for detailed analysis
\`\`\`

HTML/CSS security is crucial for protecting users and maintaining trust. By implementing these security measures, you can significantly reduce the attack surface of your web applications.`
            }
        ];
    }
    
    // Load pages into the UI
    loadPages() {
        const pagesGrid = document.getElementById('pages-grid');
        if (!pagesGrid) return;
        
        pagesGrid.innerHTML = '';
        
        this.pages.forEach(page => {
            const pageCard = document.createElement('div');
            pageCard.className = 'page-card';
            pageCard.innerHTML = `
                <div class="page-icon">
                    <i class="fas ${page.icon}"></i>
                </div>
                <div class="page-content">
                    <h3>${page.title}</h3>
                    <p>${page.description}</p>
                    <div class="page-meta">
                        <span class="page-category ${page.category}">${page.category}</span>
                        <span class="page-id">Page ${page.id}/15</span>
                    </div>
                </div>
                <button class="btn-view-page" onclick="viewPage(${page.id})">
                    <i class="fas fa-book-open"></i> Read
                </button>
            `;
            
            pagesGrid.appendChild(pageCard);
        });
    }
    
    // View a specific page
    viewPage(pageId) {
        const page = this.pages.find(p => p.id === pageId);
        if (!page) return;
        
        // Create modal
        const modal = document.createElement('div');
        modal.className = 'page-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2><i class="fas ${page.icon}"></i> ${page.title}</h2>
                    <button class="modal-close" onclick="this.parentElement.parentElement.parentElement.remove()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="page-meta">
                        <span class="page-category ${page.category}">${page.category.toUpperCase()}</span>
                        <span class="page-id">Educational Content - Page ${page.id}</span>
                    </div>
                    <div class="page-content-text">
                        ${this.formatContent(page.content)}
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="page-navigation">
                        ${pageId > 1 ? 
                            `<button class="btn-nav" onclick="viewPage(${pageId - 1})">
                                <i class="fas fa-arrow-left"></i> Previous
                            </button>` : ''
                        }
                        ${pageId < this.pages.length ? 
                            `<button class="btn-nav" onclick="viewPage(${pageId + 1})">
                                Next <i class="fas fa-arrow-right"></i>
                            </button>` : ''
                        }
                    </div>
                    <button class="btn-close-modal" 
                            onclick="this.parentElement.parentElement.parentElement.remove()">
                        Close
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Add modal styles
        this.addModalStyles();
    }
    
    // Simple markdown-like formatting
    formatContent(content) {
        // Convert markdown headers
        content = content.replace(/^# (.*$)/gm, '<h1>$1</h1>');
        content = content.replace(/^## (.*$)/gm, '<h2>$1</h2>');
        content = content.replace(/^### (.*$)/gm, '<h3>$1</h3>');
        
        // Convert code blocks
        content = content.replace(/```(\w+)?\n([\s\S]*?)```/g, function(match, lang, code) {
            return `<pre><code class="language-${lang || 'text'}">${this.escapeHtml(code)}</code></pre>`;
        }.bind(this));
        
        // Convert inline code
        content = content.replace(/`([^`]+)`/g, '<code>$1</code>');
        
        // Convert bold
        content = content.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
        
        // Convert lists
        content = content.replace(/^- (.*$)/gm, '<li>$1</li>');
        content = content.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
        
        // Convert line breaks
        content = content.replace(/\n\n/g, '</p><p>');
        content = '<p>' + content + '</p>';
        
        return content;
    }
    
    // Escape HTML
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    // Add modal styles
    addModalStyles() {
        if (!document.getElementById('modal-styles')) {
            const style = document.createElement('style');
            style.id = 'modal-styles';
            style.textContent = `
                .page-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.9);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 10000;
                    padding: 20px;
                }
                
                .modal-content {
                    background: #0a0a0a;
                    border: 2px solid #00ff00;
                    border-radius: 8px;
                    width: 100%;
                    max-width: 900px;
                    max-height: 90vh;
                    display: flex;
                    flex-direction: column;
                }
                
                .modal-header {
                    padding: 20px;
                    border-bottom: 1px solid #00ff00;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .modal-header h2 {
                    margin: 0;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                
                .modal-close {
                    background: none;
                    border: none;
                    color: #00ff00;
                    font-size: 1.5rem;
                    cursor: pointer;
                }
                
                .modal-body {
                    padding: 20px;
                    overflow-y: auto;
                    flex: 1;
                }
                
                .page-content-text h1, 
                .page-content-text h2, 
                .page-content-text h3 {
                    color: #00ff00;
                    margin: 1em 0 0.5em 0;
                }
                
                .page-content-text p {
                    margin: 1em 0;
                    line-height: 1.6;
                }
                
                .page-content-text code {
                    background: #1a1a1a;
                    padding: 2px 6px;
                    border-radius: 4px;
                    font-family: monospace;
                }
                
                .page-content-text pre {
                    background: #1a1a1a;
                    padding: 15px;
                    border-radius: 6px;
                    overflow-x: auto;
                    margin: 15px 0;
                    border-left: 4px solid #00ff00;
                }
                
                .page-content-text ul {
                    padding-left: 20px;
                    margin: 10px 0;
                }
                
                .page-content-text li {
                    margin: 5px 0;
                }
                
                .modal-footer {
                    padding: 20px;
                    border-top: 1px solid #00ff00;
                    display: flex;
                    justify-content: space-between;
                }
                
                .page-navigation {
                    display: flex;
                    gap: 10px;
                }
                
                .btn-nav, .btn-close-modal {
                    background: #00aa00;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 4px;
                    cursor: pointer;
                    font-family: monospace;
                }
                
                @media (max-width: 768px) {
                    .modal-content {
                        max-height: 95vh;
                    }
                    
                    .modal-footer {
                        flex-direction: column;
                        gap: 10px;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
}

// Create global instance
const pagesManager = new PagesManager();

// Global functions
function loadPages() {
    pagesManager.loadPages();
}

function viewPage(pageId) {
    pagesManager.viewPage(pageId);
}