import { TokenCache, TokenStore } from '@commercetools/sdk-client-v2';

class TokenStorage implements TokenCache {
  private storageKey = 'commercetools_token';

  private current: TokenStore | {} = {};

  get(): TokenStore {
    const storedToken = sessionStorage.getItem(this.storageKey);
    if (storedToken) {
      const parsed = JSON.parse(storedToken) as TokenStore;
      if ('expirationTime' in parsed && parsed.expirationTime >= Date.now()) {
        this.current = parsed;
      } else {
        sessionStorage.removeItem(this.storageKey);
        this.current = {};
      }
      return <TokenStore>this.current;
    }
    return {} as TokenStore;
  }

  set(cache: TokenStore): TokenStore {
    this.current = cache;
    sessionStorage.setItem(this.storageKey, JSON.stringify(cache));
    return <TokenStore>this.current;
  }
}

export default TokenStorage;
