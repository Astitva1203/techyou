import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-6 text-center">
          <div className="max-w-md glass-card p-8 rounded-2xl border border-white/10">
            <h2 className="text-2xl font-display font-bold text-red-400 mb-4">Oops, something went wrong.</h2>
            <p className="text-white/60 mb-6">We're sorry, but an unexpected error occurred. Please try refreshing the page.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
