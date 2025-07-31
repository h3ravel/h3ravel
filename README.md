<p align="center"><a href="https://h3ravel.toneflix.net" target="_blank"><img src="https://raw.githubusercontent.com/h3ravel/assets/refs/heads/main/logo-full.svg" width="400" alt="H3ravel Logo"></a></p>

# About H3ravel

H3ravel is a modern TypeScript runtime-agnostic web framework built on top of [H3](https://h3.dev), designed to bring the elegance and developer experience of [Laravel](https://laravel.com) to the JavaScript ecosystem.

## Features

- Laravel-inspired architecture – Service Container, Service Providers, Middleware, Facades
- Clean Routing – Dedicated routes directory with web and api route files
- Controllers with decorators – Class-based controllers like Laravel
- HTTP Kernel – Centralized middleware and request lifecycle handling
- Eloquent-like ORM – Fluent, model-based database interactions (planned)
- Musketeer CLI, our Powerful Artisan-like command-line tool for generating code and running tasks
- Modular Services – Mail, Queue, Cache, Broadcasting support
- Runtime Agnostic – Works seamlessly across Node.js, Bun, and Deno
- Type-safe everything – Fully written in TypeScript

## Why H3ravel?

While modern JavaScript frameworks focus on speed and minimalism, they often lack the developer experience and structure found in PHP’s Laravel. H3ravel aims to fill that gap by providing:

- Laravel’s elegance – Familiar MVC patterns, expressive routing, service providers, and middleware.
- TypeScript-first approach – Strong typing and modern DX out of the box.
- Built on H3 – A lightweight, framework-agnostic HTTP library that’s:
  - Fast – Optimized for speed with minimal overhead.
  - Flexible – Works with any runtime or deployment target.
  - Composable – Lets us build a layered Laravel-like architecture without restrictions.
- Runtime agnosticism – Unlike many Node frameworks, H3ravel runs on Node.js, Bun, or Deno with no extra setup.

This combination delivers the productivity of Laravel while leveraging the modern JavaScript ecosystem and runtime flexibility.

## Project Structure

```
src/
├── core/              # Framework foundation (App Container, Kernel, Providers)
├── http/
│   ├── controllers/   # Controllers
│   ├── middleware/    # Middleware
│   └── kernel.ts      # HTTP Kernel (middleware stack & route loading)
├── routes/            # Route definitions
│   ├── web.ts         # Web routes
│   └── api.ts         # API routes
├── database/          # ORM, migrations, seeds
├── console/           # CLI commands
├── services/          # Mail, Queue, Cache
├── support/           # Helpers, utilities
└── config/            # Configuration files
```

## Philosophy

- Laravel DX, TypeScript speed – H3ravel brings Laravel’s expressive syntax and architecture to JavaScript with full type safety.
- Minimal, yet scalable – Built on H3’s tiny but powerful HTTP handling, keeping your app fast and maintainable.
- Runtime Freedom – Designed to run on Node.js, Bun, and Deno without code changes.
- Convention over configuration – Opinionated structure for faster development.

## Roadmap

- [ ] Application container with service providers
- [ ] Middleware pipeline and HTTP kernel
- [ ] Routing system (with decorators)
- [ ] CLI (artisan-like commands)
- [ ] ORM with relationships (Eloquent-style)
- [ ] Queues, Mail, Events, Broadcasting
- [ ] Config management and environment handling
- [ ] First-class runtime adapters (Node, Bun, Deno)

## Contributing

Thank you for considering contributing to the H3ravel framework! The contribution guide can be found in the [H3ravel documentation](#!).

## Code of Conduct

In order to ensure that the H3ravel community is welcoming to all, please review and abide by the [Code of Conduct](#).

## Security Vulnerabilities

If you discover a security vulnerability within H3ravel, please send an e-mail to Legacy via hamzas.legacy@toneflix.ng. All security vulnerabilities will be promptly addressed.

## License

The H3ravel framework is open-sourced software licensed under the [MIT license](LICENSE).
