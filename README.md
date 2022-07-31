# Reproduction of module not found issue in Remix

`remix build` and `remix dev` unexpectedly show the `warns when a module isn't installed` behavior, when using local packages in pnpm workspace.

The link to the Remix's test of this behavior is https://github.dev/remix-run/remix/blob/40a7a390063836607c76aad9754b7881f8c82303/integration/compiler-test.ts#L326

The issue might come from the `workspace:` prefix `pnpm` use to differentiate local packages from remote packages.

For example:

```json
"dependencies": {
  "shared-ui": "workspace:^1.0.0"
}
```

## Steps to reproduce

1. Clone the repo.
2. Run `pnpm i`.
3. Run `pnpm dev` or `pnpm build` to see the warning message.
