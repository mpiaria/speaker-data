import React from "react";

type ErrorBoundaryProps = {
  errorUI?: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error: Error): ErrorBoundaryState {
    console.log("ErrorBoundary:getDerivedStateFromError");
    return { hasError: true };
  }

  componentDidCatch(_error: Error, _errorInfo: React.ErrorInfo): void {}

  render(): React.ReactNode {
    console.log("ERRORBOUNDARY render");
    if (this.state.hasError) {
      if (this.props.errorUI) {
        return this.props.errorUI;
      }
      return <div>Something went wrong</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
