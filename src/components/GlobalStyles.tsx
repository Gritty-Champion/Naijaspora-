"use client"

import { schemes } from "@/styles/colors";

export default function GlobalStyles() {
  return (
    <style jsx global>
      {`
        :root {
          --primary: ${schemes.primary.base};
          --on-primary: ${schemes.primary.on_primary};
          --primary-container: ${schemes.primary.primary_container};
          --on-primary-container: ${schemes.primary.on_primary_container};
          --primary-fixed: ${schemes.primary.primary_fixed};
          --on-primary-fixed: ${schemes.primary.on_primary_fixed};
          --primary-fixed-dim: ${schemes.primary.primary_fixed_dim};
          --on-primary-fixed-variant: ${schemes.primary
            .on_primary_fixed_variant};

          --secondary: ${schemes.secondary.base};
          --on-secondary: ${schemes.secondary.on_secondary};
          --secondary-container: ${schemes.secondary.secondary_container};
          --on-secondary-container: ${schemes.secondary.on_secondary_container};
          --secondary-fixed: ${schemes.secondary.secondary_fixed};
          --on-secondary-fixed: ${schemes.secondary.on_secondary_fixed};
          --secondary-fixed-dim: ${schemes.secondary.secondary_fixed_dim};
          --on-secondary-fixed-variant: ${schemes.secondary
            .on_secondary_fixed_variant};

          --tertiary: ${schemes.tertiary.base};
          --on-tertiary: ${schemes.tertiary.on_tertiary};
          --tertiary-container: ${schemes.tertiary.tertiary_container};
          --on-tertiary-container: ${schemes.tertiary.on_tertiary_container};
          --tertiary-fixed: ${schemes.tertiary.tertiary_fixed};
          --on-tertiary-fixed: ${schemes.tertiary.on_tertiary_fixed};
          --tertiary-fixed-dim: ${schemes.tertiary.tertiary_fixed_dim};
          --on-tertiary-fixed-variant: ${schemes.tertiary
            .on_tertiary_fixed_variant};

          --surface: ${schemes.surface.base};
          --on-surface: ${schemes.surface.on_surface};
          --surface-container: ${schemes.surface.surface_container};
        }
      `}
    </style>
  );
}
