import { Token } from './token';

/**
 * Represents a pseudo ERC20 token that is a native token on another chain.
 */
export class ExternalNativeToken extends Token {
  public readonly isExternalNative: true = true;
  /**
   * The contract address on the chain on which this token lives
   */
  public readonly chain: string;
  public readonly logoURI?: string;

  public constructor(
    chain: string,
    chainId: number,
    decimals: number,
    symbol: string,
    name?: string,
    logoURI?: string,
    searchableTerms?: string,
  ) {
    super(chainId, '', decimals, symbol, name, searchableTerms);
    this.chain = chain;
    this.logoURI = logoURI;
  }
}
