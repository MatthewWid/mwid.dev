# [mwid.dev](https://mwid.dev/)

My personal portfolio and digital resume.

Built with [React](https://react.dev/), [Next](https://nextjs.org/) and [Sass](https://sass-lang.com/).

## Development

Install dependencies:

```bash
pnpm install
```

Run development server:

```bash
pnpm run dev
```

Build static assets:

```bash
pnpm run build
```

## Environment Variables

Environment variables may be defined within your shell or using a `.env` file.

```sh
cp ./.env.template ./.env
```

The following variables are available:

|Variable|Required|Description|
|-|-|-|
|`NEXT_PUBLIC_ANALYTICS_SCRIPT_URL`|No|URL of the [Umami](https://umami.is/) tracking script.|
|`NEXT_PUBLIC_ANALYTICS_WEBSITE_ID`|No|ID of the [Umami](https://umami.is/docs/add-a-website) website entry.|

## License

This project is licensed under the [MIT license](https://opensource.org/license/mit/).
