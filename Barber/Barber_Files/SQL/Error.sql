CREATE TABLE [dbo].[ErrorLog](
	[ErrorID] [int] IDENTITY(1,1) NOT NULL,
	[Message] [varchar](500) NOT NULL,
	[StackTrace] [nvarchar](max) NOT NULL,
	[ErrorLocation] [varchar](500) NOT NULL,
	[ErrorTime] [datetime] NOT NULL,
 CONSTRAINT [PK_ErrorLog] PRIMARY KEY CLUSTERED 
(
	[ErrorID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO


CREATE PROCEDURE [dbo].[p_ErrorLog_Insert]
(
	 @Message varchar(500)
    ,@StackTrace nvarchar(max)
    ,@ErrorLocation varchar(500) = NULL
)
AS
BEGIN
	-- cpk:<date>
	-- 
	SET NOCOUNT ON;

	INSERT INTO [dbo].[ErrorLog]
           ([Message]
           ,[StackTrace]
           ,[ErrorLocation]
           ,[ErrorTime])
     VALUES
           (@Message --varchar(500)
           ,@StackTrace --nvarchar(max)
           ,@ErrorLocation --varchar(500)
           ,GETDATE())
    
END
GO
