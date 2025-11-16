section .data
  msg db 'Hello Assembly!', 0Ah ; message with new line

section .text
  global _start

_start:
  mov eax, 4        ; syscall: write
  mov ebx, 1        ; file description: stdout
  mov ecx, msg      ; pointer to message
  mov edx, 13       ; length of message
  int 0x80          ; call kernal

  mov eax, 1        ; syscall: exit
  xor ebx, ebx      ; exit code 0
  int 0x80