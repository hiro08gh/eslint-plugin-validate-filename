export const regexCaseMap = {
  /**
   * hello, helloWorld
   */
  camel: '+([a-z])*([a-z0-9])*([A-Z]*([a-z0-9]))',
  /**
   * Hello, HelloWorld
   */
  pascal: '*([A-Z]*([a-z0-9]))',
  /**
   * hello, hello_world
   */
  snake: '+([a-z])*([a-z0-9])*(_+([a-z0-9]))',
  /**
   * hello, hello-world
   */
  kebab: '+([a-z])*([a-z0-9])*(-+([a-z0-9]))',
  /**
   * hello, helloworld
   */
  flat: '+([a-z0-9])',
} as const;
