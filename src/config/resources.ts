import { ResourceConfig } from '@h3ravel/http'

export default (): ResourceConfig => {
    return {
        /*
        |--------------------------------------------------------------------------
        | Default Case
        |--------------------------------------------------------------------------
        |
        | The preferred case style for resource keys in the response. 
        | Can be set to a preset string ('camel', 'snake', 'pascal', 'kebab') or 
        | a custom transformer function.
        | 
        | Default: camel
        |
        */

        preferredCase: 'camel',

        /*
        |--------------------------------------------------------------------------
        | Response Structure
        |--------------------------------------------------------------------------
        |
        | An object specifying the structure of the response body for resources. 
        | It includes a rootKey property that defines the key under which the resource  
        | data will be nested in the response. 
        |
        | The rootKey is a string that represents the name of this key in the 
        | response body.
        |
        */

        responseStructure: {
            wrap: true,
            rootKey: 'data',
        },

        /*
        |--------------------------------------------------------------------------
        | Paginated Extras
        |--------------------------------------------------------------------------
        |
        | An array or object specifying which additional data to include in  
        | paginated responses. Can include 'meta', 'links', and/or 'cursor'. If an   
        | object is provided, the keys can be customized to specify the property 
        | names for each type of extra data in the response.
        |
        */

        paginatedExtras: ['meta', 'links'],

        /*
        |--------------------------------------------------------------------------
        | Base Url
        |--------------------------------------------------------------------------
        |
        | The base URL to use for generating pagination links in responses.
        |
        */

        baseUrl: 'https://localhost',

        /*
        |--------------------------------------------------------------------------
        | Page Name
        |--------------------------------------------------------------------------
        |
        | The query parameter name to use for the page number in paginated requests.
        |
        */

        pageName: 'page',

        /*
        |--------------------------------------------------------------------------
        | Paginated Links
        |--------------------------------------------------------------------------
        |
        | An object specifying the keys to use for pagination links in the response. 
        | Each property corresponds to a specific pagination link:
        |
        | first: The key for the link to the first page of results.
        | last: The key for the link to the last page of results.
        | prev: The key for the link to the previous page of results.
        | next: The key for the link to the next page of results. 
        |
        | All properties are optional and can be customized to specify the 
        | desired keys for pagination links in the response.
        |
        */

        paginatedLinks: {
            first: 'first',
            last: 'last',
            prev: 'prev',
            next: 'next',
        },

        /*
        |--------------------------------------------------------------------------
        | Paginated Meta
        |--------------------------------------------------------------------------
        |
        | An object specifying the keys to use for pagination metadata in the response.
        | Each property corresponds to a specific piece of pagination information:
        |
        | to: The key for the index of the last item in the current page of results.
        | from: The key for the index of the first item in the current page of results.
        | links: The key for any additional pagination links included in the response.
        |
        */

        paginatedMeta: {
            to: 'to',
            from: 'from',
            links: 'links',
            path: 'path',
            total: 'total',
            per_page: 'per_page',
            last_page: 'last_page',
            current_page: 'current_page',
        },

        /*
        |--------------------------------------------------------------------------
        | Cursor Meta
        |--------------------------------------------------------------------------
        |
        | An object specifying the keys to use for cursor pagination metadata in 
        | the response. Each property corresponds to a specific piece of 
        | cursor pagination information:
        |
        | previous: The key for the cursor value that points to the previous page 
        | of results.
        | next: The key for the cursor value that points to the next page of results.
        |
        | Both properties are optional and can be customized to specify the desired 
        | keys for cursor pagination metadata in the response.
        |
        */

        cursorMeta: {
            previous: 'previous',
            next: 'next',
        }
    }
}
