## API Swagger
![email](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/cb11ffd8-590c-4dd3-b8e9-f430c73d3966/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220828%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220828T114726Z&X-Amz-Expires=86400&X-Amz-Signature=80c68b26dd66b4130f0009897496583990703448c1f8f78f8ca349c0f7356f9b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
![member](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2ab1c8fe-54c0-4bab-9d79-4693e2c3ca83/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220828%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220828T115019Z&X-Amz-Expires=86400&X-Amz-Signature=3313c465b1400e05c348cbeb816432874c164063405461fc37357201061d4cae&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
![record](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/317dad70-b60e-434b-8f69-7ce7736b1f64/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220828%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220828T115059Z&X-Amz-Expires=86400&X-Amz-Signature=e1fa9b587aa527b01e8545eb0e9df34c6f29f16e0afaeb1b91e07906346f287d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
![token](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/944cd1df-6191-433d-b10e-547cfeda6877/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220828%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220828T115116Z&X-Amz-Expires=86400&X-Amz-Signature=edbd80a7236ed34ca0c9cc4c2aa80ae1c6585ec7b8b8df1197e8d41d0e730f49&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)


## 예외 처리
+ @ControllerAdvice로 모든 예외를 한 곳에서 처리
```
@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler {
	@ExceptionHandler(MethodArgumentNotValidException.class)
    protected ResponseEntity<ErrorResponse> handleMethodArgumentNotValidException(MethodArgumentNotValidException e) {
        log.error("handleMethodArgumentNotValidException", e);
        final ErrorResponse response = ErrorResponse.of(ErrorCode.INVALID_INPUT_VALUE,e.getMessage());
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }
	// ... 
}
```

+ Error Code 정의
```
@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum ErrorCode {

    // Common
    OK(200, "OK"),
    INVALID_INPUT_VALUE(400,  "INVALID_INPUT_VALUE"),
    METHOD_NOT_ALLOWED(405, " Invalid Input Value"),
    ENTITY_NOT_FOUND(404, " Entity Not Found"),
    INTERNAL_SERVER_ERROR(500, "Server Error"),
    INVALID_TYPE_VALUE(400, " Invalid Type Value"),
    HANDLE_ACCESS_DENIED(403, "Access is Denied"),
    UNAUTHORIZED(401, "UnAuthorized"),
    SOME_VALUE_EMPTY(500,"Some value is empty"),

    private int status;
    private final String message;

    ErrorCode(final int status, final String message) {
        this.status = status;
        this.message = message;
    }

    public String getMessage() {
        return this.message;
    }

    public int getStatus() {
        return status;
    }
}
```

+ Business Exception 처리
  + 요구사항에 맞지 않을 경우 발생시키는 Exception
  
+ 컨트롤러 Exception 처리 
  + @ContolerAdvice에서 적절하게 핸들링됨

+ Try catch
  + 최대한 지양
  + try catch로 에러가 발생하는 코드는 최대한 없도록(ex. null이 아닌 0이들어가는 방식으로)



