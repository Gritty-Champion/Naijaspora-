import React, { useEffect, ComponentType } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks/useAuth";
import { path } from "@/routes";

interface AuthGuardOptions {
  LoadingComponent?: ComponentType;
  redirectTo?: string;
  preserveRedirect?: boolean;
}

/**
 * Higher-Order Component that protects routes requiring authentication.
 * Redirects unauthenticated users to login page.
 *
 * @example
 * export default AuthGuard(DashboardPage);
 *
 * @example
 * export default AuthGuard(AdminPage, {
 *   LoadingComponent: Spinner,
 *   redirectTo: '/admin/login',
 *   preserveRedirect: true
 * });
 */
export function AuthGuard<P extends object>(
  WrappedComponent: ComponentType<P>,
  options: AuthGuardOptions = {}
) {
  const {
    LoadingComponent,
    redirectTo = path.login,
    preserveRedirect = true,
  } = options;

  const ComponentWithAuthGuard: React.FC<P> = (props) => {
    const { isAuthenticated, isAuthenticating, userToken, user } = useAuth();
    const router = useRouter();

   useEffect(() => {
     // Wait until auth check is complete
     if (isAuthenticating) return;

     // Only redirect if definitely not authenticated
     // We need both a valid token AND user profile to be considered authenticated
     if (!isAuthenticated || !userToken) {
       let redirectUrl = redirectTo;
       if (preserveRedirect && router.asPath !== redirectTo) {
         const nextParam = encodeURIComponent(router.asPath);
         redirectUrl = `${redirectTo}?next=${nextParam}`;
       }
       router.replace(redirectUrl);
     }
   }, [isAuthenticated, isAuthenticating, router, userToken]);


    // Show loading state during authentication check
    if (isAuthenticating) {
      if (LoadingComponent) {
        return <LoadingComponent />;
      }
      return (
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh"
        }}>
          <div>Loading...</div>
        </div>
      );
    }

    // Don't render protected content if not authenticated
    if (!isAuthenticated || !user?.profile?.email) {
      return null;
    }

    // Render protected component
    return <WrappedComponent {...props} />;
  };

  // Set display name for better debugging
  const wrappedComponentName =
    WrappedComponent.displayName ||
    WrappedComponent.name ||
    "Component";
  ComponentWithAuthGuard.displayName = `AuthGuard(${wrappedComponentName})`;

  return ComponentWithAuthGuard;
}

/**
 * Simplified AuthGuard with custom loading component
 *
 * @example
 * export default withAuthGuard(ProfilePage, <Spinner />);
 */
export function withAuthGuard<P extends object>(
  WrappedComponent: ComponentType<P>,
  loadingElement?: React.ReactElement
) {
  const LoadingComponent = loadingElement
    ? () => loadingElement
    : undefined;

  return AuthGuard(WrappedComponent, { LoadingComponent });
}

/**
 * Hook-based alternative to HOC pattern for more flexibility
 * Use this in your component to handle authentication checks
 *
 * @example
 * function DashboardPage() {
 *   const { isAuthorized, isChecking } = useAuthGuard();
 *
 *   if (isChecking) return <Spinner />;
 *   if (!isAuthorized) return null;
 *
 *   return <Dashboard />;
 * }
 */
export function useAuthGuard(options: AuthGuardOptions = {}) {
  const { redirectTo = path.login, preserveRedirect = true } = options;
  const { isAuthenticated, isAuthenticating, userToken } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticating) {
      return;
    }

    if (!isAuthenticated || !userToken) {
      let redirectUrl = redirectTo;

      if (preserveRedirect && router.asPath !== redirectTo) {
        const nextParam = encodeURIComponent(router.asPath);
        redirectUrl = `${redirectTo}?next=${nextParam}`;
      }

      router.replace(redirectUrl);
    }
    // redirectTo and preserveRedirect are stable values from hook options
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isAuthenticating, userToken, router]);

  return {
    isAuthorized: isAuthenticated && !!userToken,
    isChecking: isAuthenticating,
  };
}
