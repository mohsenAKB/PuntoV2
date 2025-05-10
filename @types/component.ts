import { ReactNode } from "react";

export interface ILayout {
  children: ReactNode
}

export interface IProvider {
  children: ReactNode
}

export interface IPage<S = Record<string, string>, P = Record<string, string>> {
  searchParams?: Promise<S>
  params?: Promise<P>
}