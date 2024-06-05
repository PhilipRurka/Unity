# Mongo DB Todo List

This projects stack is the following.

<table>
  <tr>
    <td>
      <div>
        <br/>
        <a href='https://vercel.com/home'>
          <img src="https://skillicons.dev/icons?i=vercel" width="48" height="48" alt="Vercel" />
        </a>
        <div>Vercel</div>
        <br/>
      </div>
    </td>
    <td>
      <br/>
      <a href=''>
        <img src="https://skillicons.dev/icons?i=nextjs" width="48" height="48" alt="Next.js" />
      </a>
      <div>Nextjs</div>
      <br/>
    </td>
    <td>
      <br/>
      <a href=''>
        <img src="https://skillicons.dev/icons?i=ts" width="48" height="48" alt="TypeScript" />
      </a>
      <div>Typescript</div>
      <br/>
    </td>
  </tr>
  <tr>
    <td>
      <br/>
      <div>
        <span>
          <img width='15' />
        </span>
        <span>
          <a href=''>
            <img src="https://skillicons.dev/icons?i=mongodb" width="48" height="48" alt="Mongodb" />
          </a>
          <div>Mongodb</div>
        </span>
        <span>
          <img width='15' />
        </span>
      </div>
      <br/>
    </td>
    <td>
      <br/>
      <a href=''>
        <img src="https://github.com/PhilipRurka/unity/blob/main/readme-assets/mongoose.png?raw=true" width="48" height="48" alt="Mongoose" />
      </a>
      <div>Mongoose</div>
      <br/>
    </td>
    <td>
      <br/>
      <a href=''>
        <img src="https://github.com/PhilipRurka/unity/blob/main/readme-assets/migrate-mongo.png?raw=true" width="48" height="48" alt="Migrate Mongo" />
      </a>
      <div>Mongo</div>
      <br/>
    </td>
  </tr>
  <tr>
    <td>
      <br/>
      <a href=''>
        <img src="https://skillicons.dev/icons?i=tailwind" width="48" height="48" alt="Tailwind" />
      </a>
      <div>Tailwind</div>
      <br/>
    </td>
    <td>
      <br/>
      <a href=''>
        <img src="https://github.com/PhilipRurka/unity/blob/main/readme-assets/swr.png?raw=true" width="48" height="48" alt="SWR" />
      </a>
      <div>SWR</div>
      <br/>
    </td>
    <td>
      <br/>
      <a href=''>
        <img src="https://github.com/PhilipRurka/unity/blob/main/readme-assets/next-auth.png?raw=true" width="48" height="48" alt="NextAuth" />
      </a>
      <div>NextAuth</div>
      <br/>
    </td>
  </tr>
  <tr>
    <td>
      <br/>
      <a href=''>
        <img src="https://github.com/PhilipRurka/unity/blob/main/readme-assets/prettier.png?raw=true" width="48" height="48" alt="TypeScript" />
      </a>
      <div>Prettier</div>
      <br/>
    </td>
    <td>
      <br/>
      <a href=''>
        <img src="https://github.com/PhilipRurka/unity/blob/main/readme-assets/eslint.png?raw=true" width="48" height="48" alt="TypeScript" />
      </a>
      <div>ESLint</div>
      <br/>
    </td>
    <td>
      <br/>
      <a href=''>
        <img src="https://github.com/PhilipRurka/unity/blob/main/readme-assets/husky.png?raw=true" width="48" height="48" alt="TypeScript" />
      </a>
      <div>Husky</div>
      <br/>
    </td>
  </tr>
    <td>
      <br/>
      <a href=''>
        <img src="https://github.com/PhilipRurka/unity/blob/main/readme-assets/react-hook-form.png?raw=true" width="48" height="48" alt="React Hood Form" />
      </a>
      <div>Form</div>
      <br/>
    </td>
    <td>
      <br/>
      <a href=''>
        <img src="https://github.com/PhilipRurka/unity/blob/main/readme-assets/zod.png?raw=true" width="48" height="48" alt="Zod" />
      </a>
      <div>Zod</div>
      <br/>
    </td>
    <td>
      <br/>
      <a href=''>
        <img src="https://github.com/PhilipRurka/unity/blob/main/readme-assets/contentful.png?raw=true" width="48" height="48" alt="Contentful" />
      </a>
      <div>Contentful</div>
      <br/>
    </td>
  </tr>
  </tr>
    <td>
      <br/>
      <a href=''>
        <img src="https://github.com/PhilipRurka/unity/blob/main/readme-assets/turbo.svg?raw=true" width="48" height="48" alt="Turbo" />
      </a>
      <div>Turbo</div>
      <br/>
    </td>
    <td>
      <br/>
      <a href=''>
        <img src="https://github.com/PhilipRurka/unity/blob/main/readme-assets/rollup.svg?raw=true" width="48" height="48" alt="Rollup" />
      </a>
      <div>Rollup</div>
      <br/>
    </td>
    <td></td>
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
