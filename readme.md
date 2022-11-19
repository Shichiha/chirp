# chirp

Chirp is a Discord bot made with a Discord API Library for Deno, [Harmony](https://github.com/harmonyland/harmony)  

## Getting Started

### Prerequisites

- [Deno](https://deno.land/)

### Usage

- Clone this repository
- Create a `.env` file in the root directory of the project
- Add the `DISCORD_TOKEN` variable to the `.env` file like:
  
```
DISCORD_TOKEN="xxx"
```

- Run `deno --allow-net --allow-env --allow-net run mod.ts` in the root directory of the project
  
Usage as a module is supported, just import `mod.ts` from `https://raw.githubusercontent.com/Shichiha/chirp/main/mod.ts`. Although, you will still need to provide the `DISCORD_TOKEN` variable yourself.

## Contributing

- Fork this repository
- Create a new branch
- Make your changes
- Create a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

- [Harmony](https://github.com/harmonyland/harmony) for the Discord API Library
- [Discord](https://discord.com/) for the Discord API
- [Deno](https://deno.land/) for the runtime


