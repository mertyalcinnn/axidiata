# Deploying Axidiata to Cloudflare Pages

This guide explains how to deploy the Axidiata Jewelry website to Cloudflare Pages.

## Prerequisites

- A Cloudflare account
- Git repository with your project (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### 1. Connect your Git repository to Cloudflare Pages

1. Log in to your Cloudflare account and navigate to the Pages section
2. Click "Create a project"
3. Select your Git provider and authorize Cloudflare to access your repositories
4. Select the "axidiata" repository

### 2. Configure your build settings

Use the following build configuration:

- **Project name**: axidiata-jewelry (or your preferred name)
- **Production branch**: main (or your main branch)
- **Build command**: npm run build
- **Build output directory**: .next
- **Root directory**: / (leave empty)

### 3. Environment variables

Add the following environment variables:

- `NODE_VERSION`: 18
- `NODE_ENV`: production

### 4. Advanced build settings

Enable the following options:
- ✅ Next.js compatibility flag

### 5. Deploy

Click "Save and Deploy" to start the deployment process.

## Post-deployment configuration

### Custom domain setup

1. Navigate to the "Custom domains" tab of your Pages project
2. Click "Set up a custom domain"
3. Enter your domain (e.g., axidiata.com)
4. Follow the instructions to verify domain ownership

### Environment variables for different branches

For different environments (production, staging, etc.), configure branch-specific environment variables through the Cloudflare dashboard.

## Troubleshooting

- **Build failures**: Check the build logs in the Cloudflare Pages dashboard
- **Routing issues**: Verify your Next.js configuration and middleware settings
- **Image optimization**: Make sure the Image domains are properly configured

## Continuous deployment

Cloudflare Pages will automatically build and deploy your site when changes are pushed to the configured branch.
