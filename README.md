# Unity

This projects stack is the following.

<table>
  <tr>
    <td>
      <div>
        <a href='https://vercel.com/home'>
          <img src="https://skillicons.dev/icons?i=vercel" width="48" height="48" alt="Vercel" />
        </a>
        <div>Vercel</div>
      </div>
    </td>
    <td>
      <a href=''>
        <img src="https://skillicons.dev/icons?i=nextjs" width="48" height="48" alt="Next.js" />
      </a>
      <div>Nextjs</div>
    </td>
    <td>
      <a href=''>
        <img src="https://skillicons.dev/icons?i=ts" width="48" height="48" alt="TypeScript" />
      </a>
      <div>Typescript</div>
    </td>
    <td>
      <a href=''>
        <img src="https://skillicons.dev/icons?i=mongodb" width="48" height="48" alt="Mongodb" />
      </a>
      <div>Mongodb</div>
    </td>
    <td>
      <a href=''>
        <img src="https://github.com/PhilipRurka/unity/blob/main/readme-assets/mongoose.png?raw=true" width="48" height="48" alt="Mongoose" />
      </a>
      <div>Mongoose</div>
    </td>
  </tr>
  <tr>
    <td>
      <a href=''>
        <img src="https://github.com/PhilipRurka/unity/blob/main/readme-assets/migrate-mongo.png?raw=true" width="48" height="48" alt="Migrate Mongo" />
      </a>
      <div>Mongo</div>
    </td>
    <td>
      <a href=''>
        <img src="https://skillicons.dev/icons?i=tailwind" width="48" height="48" alt="Tailwind" />
      </a>
      <div>Tailwind</div>
    </td>
    <td>
      <a href=''>
        <img src="https://github.com/PhilipRurka/unity/blob/main/readme-assets/swr.png?raw=true" width="48" height="48" alt="SWR" />
      </a>
      <div>SWR</div>
    </td>
    <td>
      <a href=''>
        <img src="https://github.com/PhilipRurka/unity/blob/main/readme-assets/next-auth.png?raw=true" width="48" height="48" alt="NextAuth" />
      </a>
      <div>NextAuth</div>
    </td>
    <td>
      <a href=''>
        <img src="https://github.com/PhilipRurka/unity/blob/main/readme-assets/prettier.png?raw=true" width="48" height="48" alt="TypeScript" />
      </a>
      <div>Prettier</div>
    </td>
  </tr>
  <tr>
    <td>
      <a href=''>
        <img src="https://github.com/PhilipRurka/unity/blob/main/readme-assets/eslint.png?raw=true" width="48" height="48" alt="TypeScript" />
      </a>
      <div>ESLint</div>
    </td>
    <td>
      <a href=''>
        <img src="https://github.com/PhilipRurka/unity/blob/main/readme-assets/husky.png?raw=true" width="48" height="48" alt="TypeScript" />
      </a>
      <div>Husky</div>
    </td>
    <td>
      <a href=''>
        <img src="https://github.com/PhilipRurka/unity/blob/main/readme-assets/react-hook-form.png?raw=true" width="48" height="48" alt="React Hood Form" />
      </a>
      <div>Form</div>
    </td>
    <td>
      <a href=''>
        <img src="https://github.com/PhilipRurka/unity/blob/main/readme-assets/zod.png?raw=true" width="48" height="48" alt="Zod" />
      </a>
      <div>Zod</div>
    </td>
    <td>
      <a href=''>
        <img src="https://github.com/PhilipRurka/unity/blob/main/readme-assets/contentful.png?raw=true" width="48" height="48" alt="Contentful" />
      </a>
      <div>Contentful</div>
    </td>
  </tr>
  <tr>
    <td>
      <a href=''>
        <img src="https://github.com/PhilipRurka/unity/blob/main/readme-assets/turbo.svg?raw=true" width="48" height="48" alt="Turbo" />
      </a>
      <div>Turbo</div>
    </td>
    <td>
      <a href=''>
        <img src="https://github.com/PhilipRurka/unity/blob/main/readme-assets/rollup.svg?raw=true" width="48" height="48" alt="Rollup" />
      </a>
      <div>Rollup</div>
    </td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>

Contentful
turbo
rollup

<br/>

## Post Clone

After cloning this project and running yarn, it is important to follow these steps

<br/>

### Husky configuration

We are utilizing Husky to execute eslint on `pre-commit` and eslint & build on `pre-push`.

#### Clone and move husky

Some Git Gui applications require these files to also be located in `.git`. This said run this.

```shell
npx husky install && \
rm -rf .git/hooks && \
ln -s ../.husky .git/hooks
```

> There is a chance that you must create `.git/hooks`. You will know by the output of the command above.

#### Enable execution

We need to enable the execution of these two shell scripts. EEnter this in your terminal at the root of this project.

```shell
chmod +x .husky/pre-commit .husky/pre-push && \
chmod +x .git/hooks/pre-commit .git/hooks/pre-push
```

<br />

To disable eslint on the build comment out `ignoreDuringBuilds: true,` in next.config.mjs
