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

```
git clone https://github.com/stevecaldwell77/remix-build-cannot-find-module-repo.git
cd remix-build-cannot-find-module-repo
pnpm install
(cd apps/my-remix-app && npx remix build)
```
