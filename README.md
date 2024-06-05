# Mongo DB Todo List

This projects stack is the following.

<table class='project-stack-table'>
<style>
  .project-stack-table a {
    color: black;
    text-decoration: none;
  }

.project-stack-table td {

}
</style>

  <tr>
    <td>
      <a href='https://vercel.com/home'>
        <img src="https://skillicons.dev/icons?i=vercel" width="48" height="48" alt="Vercel" />
        <span>Vercel</span>
      </a>
    </td>
    <td>
      <a href=''>
        <img src="https://skillicons.dev/icons?i=nextjs" width="48" height="48" alt="Next.js" />
        <span>Nextjs</span>
      </a>
    </td>
    <td>
      <a href=''>
        <img src="https://skillicons.dev/icons?i=ts" width="48" height="48" alt="TypeScript" />
        <span>Typescript</span>
      </a>
    </td>
  </tr>
  <tr>
    <td>
      <a href=''>
        <img src="https://skillicons.dev/icons?i=mongodb" width="48" height="48" alt="Mongodb" />
        <span>Mongodb</span>
      </a>
    </td>
    <td>
      <a href=''>
        <img src="https://github.com/PhilipRurka/unity/blob/main/readme-assets/mongoose.png?raw=true" width="48" height="48" alt="Mongoose" />
        <span>Mongoose</span>
      </a>
    </td>
    <td>
      <a href=''>
        <img src="https://github.com/PhilipRurka/unity/blob/main/readme-assets/migrate-mongo.png?raw=true" width="48" height="48" alt="Migrate Mongo" />
        <span>Mongo</span>
      </a>
    </td>
  </tr>
  <tr>
    <td>
      <a href=''>
        <img src="https://skillicons.dev/icons?i=tailwind" width="48" height="48" alt="Tailwind" />
        <span>Tailwind</span>
      </a>
    </td>
    <td>
      <a href=''>
        <img src="https://github.com/PhilipRurka/unity/blob/main/readme-assets/swr.png?raw=true" width="48" height="48" alt="SWR" />
        <span>SWR</span>
      </a>
    </td>
    <td>
      <a href=''>
        <img src="https://github.com/PhilipRurka/unity/blob/main/readme-assets/next-auth.png?raw=true" width="48" height="48" alt="NextAuth" />
        <span>NextAuth</span>
      </a>
    </td>
  </tr>
  <tr>
    <td>
      <a href=''>
        <img src="https://github.com/PhilipRurka/unity/blob/main/readme-assets/prettier.png?raw=true" width="48" height="48" alt="TypeScript" />
        <span>Prettier</span>
      </a>
    </td>
    <td>
      <a href=''>
        <img src="https://github.com/PhilipRurka/unity/blob/main/readme-assets/eslint.png?raw=true" width="48" height="48" alt="TypeScript" />
        <span>ESLint</span>
      </a>
    </td>
    <td>
      <a href=''>
        <img src="https://github.com/PhilipRurka/unity/blob/main/readme-assets/husky.png?raw=true" width="48" height="48" alt="TypeScript" />
        <span>Husky</span>
      </a>
    </td>
  </tr>
    <td>
      <a href=''>
        <img src="https://github.com/PhilipRurka/unity/blob/main/readme-assets/react-hook-form.png?raw=true" width="48" height="48" alt="React Hood Form" />
        <span>Form</span>
      </a>
    </td>
    <td>
      <a href=''>
        <img src="https://github.com/PhilipRurka/unity/blob/main/readme-assets/zod.png?raw=true" width="48" height="48" alt="Zod" />
        <span>Zod</span>
      </a>
    </td>
    <td>
      <a href=''>
        <img src="https://github.com/PhilipRurka/unity/blob/main/readme-assets/contentful.png?raw=true" width="48" height="48" alt="Contentful" />
        <span>Contentful</span>
      </a>
    </td>
  </tr>
  </tr>
    <td>
      <a href=''>
        <img src="https://github.com/PhilipRurka/unity/blob/main/readme-assets/turbo.svg?raw=true" width="48" height="48" alt="Turbo" />
        <span>Turbo</span>
      </a>
    </td>
    <td>
      <a href=''>
        <img src="https://github.com/PhilipRurka/unity/blob/main/readme-assets/rollup.svg?raw=true" width="48" height="48" alt="Rollup" />
        <span>Rollup</span>
      </a>
    </td>
    <td></td>
    <td></td>
  <tr>

  </tr>
</table>

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
