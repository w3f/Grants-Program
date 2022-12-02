# cScale

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

* **Team Name:** Matthew Darnell (Individual)
* **Payment Address:** `15ssDeS9peN9a3rDwFrV19YJ8oRffmphaE` (BTC)
* **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1
* **Status:** [Terminated](https://github.com/w3f/Grants-Program/pull/625#issuecomment-1047869564)

## Project Overview :page_facing_up:

### Overview

* cScale is a SCALE codec implementation in C
* Currently there does not seem to be a working standalone implementation of this serialization codec in C
* A SCALE implementation would allow for the development of more desktop applications communicating with Substrate nodes
* I am developing this because I am interested in creating a simple and secure desktop Substrate wallet
* I already have a generally working product that I would also like to improve as I get suggestions

### Project Details

* Technology stack will be a simple C library, mostly in C99 with a few uses of C11 `_Generic`. One dependency currently will be included which is an open sourced, single file, pure-header utf8 implementation useful for SCALE string encoding.
* Makefile is included but can do simple CMakeLists.txt if preferred
* Supported Data Types will be:
  * Fixed Width Integers
  * Compact/General Integers
  * Booleans
  * Options
  * Vectors (and Strings)
  * Enumerations
  * Tuples
  * User-Defined Data Structures
* Some limitations and caveats:
  * C does not support `uint128_t` types. Possible options are to introduce a 3rd party dependency or consume `u128` values encoded as `char*` strings. GCC does provide a `uint128_t` extension but I'm not sure how universal this is and C does not support sufficiently long literal int values. Currently I am able to encode from a hex-represented `u128` but could consume decimal represented `char*` strings if required.
  * Enumerations are tricky to implement as they are user-defined. I am able to construct a `struct` which generates a custom enum type by consuming an array of strings of different types, e.g. `[Int, Bool]`, but I am not sure how to make this very clean for the user.
  * A lack of templating and type inference makes encoding/decoding user-defined `struct` values a little difficult. I am able to achieve this by defining a custom `struct` which contains a `serialize` as well as `deserialize` function pointer. The user will be able to include this `struct` in his data structure and assign his own custom function. This works fine, but again, it is a little more in depth for the end user than ideal.
  * With each of these, I would love feedback from others on how to improve the library!

### Ecosystem Fit

* The target audience are Desktop C/C++ developers who would like to be able to encode and decode Substrate API data
* Similar Projects
  * Kagome (C++ and not intended for standalone library use)
  * FinoaBanking substrate-c-tool (Has not been updated for over a year and is in unknown state of completion as far as I can tell)

## Team :busts_in_silhouette:

### Team members

* Matthew Darnell

### Contact

* **Contact Email:** matthew.darnell@protonmail.com

### Team's experience

### Team Code Repos

* <https://github.com/MatthewDarnell/iota-simplewallet> -- IOTA C library
* <https://github.com/MatthewDarnell/redis_orderbook> -- Order matching engine in Rust

## Development Status :open_book:

Currently have a basic working implementation. Generating a testing app, a basic cli app, and a statically linked library.

Some examples:

#### Fixed Int

```c
scale_fixed_int fixed = { 0 };
encode_int_to_fixed_int_scale(&fixed, (uint16_t)42);
uint8_t serialized[64] = { 0 };
size_t serialized_len = 0;
serialize_fixed_int(serialized, &serialized_len, &fixed);

uint16_t output = 0;
decode_scale_fixed_int((void*)&output, &fixed);

for(int i=0; i < serialized_len; i++) printf("%02X", serialized[i]);
printf(" --- %u\n", output);
```

Prints:

```shell
2A00 --- 42
```

#### Compact Int

```c
 scale_compact_int compact = { 0 };
  encode_compact(&compact, (uint32_t)69);
  uint8_t serialized[64] = { 0 };
  size_t serialized_len = 0;
  char *output = decode_compact_to_hex(&compact);
  serialize_compact_int(serialized, &serialized_len, &compact);
  uint32_t decoded = strtoul(output, NULL, 16);
  printf("SCALE=<");
  for(int i=0; i < serialized_len; i++) printf("%02X", serialized[i]);
  printf("> --- Hex=<%s> --- Decoded=<%u>\n", output, decoded);
  free(output);
```

Prints:

```shell
SCALE=<1501> --- Hex=<45> --- Decoded=<69>
```

## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 1 month
* **Full-Time Equivalent (FTE):**  1 FTE
* **Total Costs:** 10,000 USD, denominated in Bitcoin

### Milestone 1 - Working Product

* **Estimated duration:** 2 weeks
* **FTE:**  1
* **Costs:** 9,000 USD in BTC

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GPLv3|
| 0b. | Documentation | I will provide a README with several examples as well as a .c file for each data type with several tests showing encoding and decoding. I will also provide a `docs` folder containing a markdown file giving examples for each data type as well as commenting  each function in the main header file. |
| 1. | Intermediate Structs | I will provide a set of Structs which represent SCALE data internally before being processed |  
| 2. | Encode | I will provide a set of functions that encode data into intermediate structs as well as others to serialize them. Each will generate an array of `uint8_t*` as well as a corresponding length |  
| 3. | Decode | I will provide a set of functions that decode a valid SCALE `uint8_t*` array into the appropriate intermediate struct as well as functions to deserialize the struct back into raw data |  
| 4. | Testing | I will provide a testing application which tests each data type and ensures correctness |
| 5. | Basic CLI | I will provide a basic command line interface app which will encode/decode fixed width and compact integers |

### Milestone 2 - Additional testing

* **Estimated duration:** 1 month
* **FTE:**  1
* **Costs:** 1,000 USD in BTC

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GPLv3|
| 0b. | Documentation | I will add several useful structs to the docs folder which represent actual Substrate data with their respective serialization functions. (AccountInfo, AccountData) |
| 1. | Tests | I will work to provide more tests, preferably utilizing Rust FFI to compare against parity-scale-code results. This may or may not require some assistance as I have never used Rust FFI. |  

## Future Plans

* I am writing this library to use in my own personal desktop wallet application
* I see a real need for it to allow the Substrate community to grow and I hope it makes it on the official list of [Scale Implementations](https://substrate.dev/docs/en/knowledgebase/advanced/codec#implementations)
* Long term I would be interested in improving this library to keep current with a possibly-evolving SCALE standard as well as getting help from other C devs making pull requests, which would be most welcome.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Shawn Tabrizi

* This started as a personal project and I would like to assist in expanding the Substrate ecosystem by providing a critical element of its infrastructure in C
